provide akra.system;;

texture tex0 : INPUT_TEXTURE;

sampler screenSampler : INPUT_SAMPLER = sampler_state
{
    Texture = <tex0>;
};

struct VS_OUT{
    float4 position : POSITION;
    float2 screenPosition : SCREEN_POSITION;
    float2 textureCoords : TEXCOORD0;
};;


float2 screenTextureRatio : INPUT_TEXTURE_RATIO;

VS_OUT vs_fxaa_shading(float2 pos: POSITION){
    VS_OUT Out;

    Out.position = float4(pos,0.,1.);
    Out.screenPosition = pos;
    //Out.textureCoords = float2(texCoodrX,texCoordY);
    Out.textureCoords = (pos + 1.)/2. * screenTextureRatio;
    
    return Out;
};

float2 screenSize : INPUT_TEXTURE_SIZE;
float FXAA_SPAN_MAX = 4.0;
float FXAA_REDUCE_MUL = 1.0/8.0;
float FXAA_REDUCE_MIN = 1.0/128.0;

float4 fs_fxaa_shading(VS_OUT IN) : COLOR{

    float4 color;
    color.w = 1.0;

    float2 texCoords = IN.textureCoords;
    float2 invScreenSize = float2(1./screenSize.x, 1./screenSize.y);
    
//    float FXAA_SPAN_MAX = 4.0;
//    float FXAA_REDUCE_MUL = 1.0/8.0;
//    float FXAA_REDUCE_MIN = 1.0/128.0;

    float3 rgbNW=tex2D(screenSampler,texCoords+(float2(-1.0,-1.0) * invScreenSize)).xyz;
    float3 rgbNE=tex2D(screenSampler,texCoords+(float2(1.0,-1.0) * invScreenSize)).xyz;
    float3 rgbSW=tex2D(screenSampler,texCoords+(float2(-1.0,1.0) * invScreenSize)).xyz;
    float3 rgbSE=tex2D(screenSampler,texCoords+(float2(1.0,1.0) * invScreenSize)).xyz;
    float3 rgbM=tex2D(screenSampler,texCoords).xyz;

    color.w = tex2D(screenSampler,texCoords).w;

    float3 luma=float3(0.299, 0.587, 0.114);
    float lumaNW = dot(rgbNW, luma);
    float lumaNE = dot(rgbNE, luma);
    float lumaSW = dot(rgbSW, luma);
    float lumaSE = dot(rgbSE, luma);
    float lumaM  = dot(rgbM,  luma);
    
    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));
    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));
    
    float2 dir;
    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));
    
    float dirReduce = max(
        (lumaNW + lumaNE + lumaSW + lumaSE) * (0.25 * FXAA_REDUCE_MUL),
        FXAA_REDUCE_MIN);
      
    float rcpDirMin = 1.0/(min(abs(dir.x), abs(dir.y)) + dirReduce);
    
    dir = min(float2( FXAA_SPAN_MAX,  FXAA_SPAN_MAX),
          max(float2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
          dir * rcpDirMin)) / screenSize;
        
    float3 rgbA = (1.0/2.0) * (
        tex2D(screenSampler, texCoords.xy + dir * (1.0/3.0 - 0.5)).xyz +
        tex2D(screenSampler, texCoords.xy + dir * (2.0/3.0 - 0.5)).xyz);
    float3 rgbB = rgbA * (1.0/2.0) + (1.0/4.0) * (
        tex2D(screenSampler, texCoords.xy + dir * (0.0/3.0 - 0.5)).xyz +
        tex2D(screenSampler, texCoords.xy + dir * (3.0/3.0 - 0.5)).xyz);
    float lumaB = dot(rgbB, luma);

    if((lumaB < lumaMin) || (lumaB > lumaMax)){
        color.xyz=rgbA;
    }
    else {
        color.xyz=rgbB;
    }

    return color;
};    

technique fxaa : POST_EFFECT {
    pass applyFXAA{
        /*        
        ZENABLE = false;
        BLENDENABLE = TRUE;
        SRCBLEND = ONE;
        DESTBLEND = INVSRCALPHA;
        */
        VertexShader = compile vs_fxaa_shading();
        PixelShader = compile fs_fxaa_shading();
    };
};

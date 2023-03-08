/* created: Thu Jan 26 2023 20:10:42 GMT+0300 (Moscow Standard Time) */

struct S {
    int val;
};

[extern]
int JSNativeFunc(string s, float2 f, bool b, int i);

int main() {
    trace(">>", 10, 10u, 10.1f, true, -10, -10.1f, false); 
	trace("123", 10, 10.1f);
    trace("123");
    S s;
    s.val = 55;
    trace(s);
    return JSNativeFunc("hello!", float2(10, 2), false, 0);
}
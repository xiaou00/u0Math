#分析 

>[!definition] Bochner可积
>设$f:X\to B$, $(X,\Sigma,\mu)$为[[测度空间]], $B$为[[Banach空间]](或[[赋范空间]]), 若:
>1. 存在一个[[简单函数]]序列$s_n\to f$ a.e. 即
>$$\lim_{n\to\infty}{\norm{s_n(x)-f(x)}_B}=0\quad\mathrm{a.e.}$$
>2. 函数$t\mapsto\norm{f(t)}_B$ (范数函数)是[[Lebesgue积分|Lebesgue可积]]($\ms L^1$)的, 即
>$$\int_X{\norm{f(t)}_B\,\d\mu}<\infty$$
>
>则称函数$f$是**Bochner可积**(Bochner integrable)的.

>[!definition] Bochner积分
>令$(X,\Sigma,\mu)$为[[测度空间]], $B$为[[Banach空间]], Bochner可积函数$f:X\to B$的**Bochner积分**(Bochner integral)与[[Lebesgue积分]]的定义基本相同, 只不过是把值域换成了一个Banach空间. 即对于简单函数定义
>$$\int_E{s\,\d\mu}=\sum_{i=1}^n{\alpha_i\mu(A_i\cap E)}$$
>对于更一般的函数则定义为, 对于几乎处处收敛于$f$的简单函数列$(s_n)$, Bochner可积保证其存在, 定义
>$$\int_X{f\,\d\mu}=\lim_{n\to\infty}{\int_X{s_n\,\d\mu}}$$


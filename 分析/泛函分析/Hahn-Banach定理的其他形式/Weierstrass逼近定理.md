#分析 

>[!thm] Weierstrass逼近定理
>设$f:[a,b]\to\R$是连续的, 那么存在一列$\R$-[[多项式]][[一致收敛]]于$f$. 也就是说, 对任意$1\le p<\infty$, 全体$[a,b]$上多项式在[[Lp空间]]$\ms L^p[a,b]$中[[稠密集|稠密]].

>[!pf]
>我们可以用泛函的理论给出一个极为优雅的证明:
>
>不妨设多项式集 $\R[x]|_{[a,b]}$ 在 $\ms L^p$ 中不稠密, 那么由[[Lp空间的对偶]], 在 $\ms L^p$ 的对偶空间 $\ms L^q$ 中 ($1/p+1/q=1$) 存在非零函数 $g\in\ms L^q$, 使得其与所有多项式正交, 也即
>$$\int_{a}^{b}{x^ng(x)\,\d x}=0,\quad \forall n=0,1,2,\ldots\tag{I}$$
>对 $g$ 做[[Fourier变换|FT]], 得
>$$\begin{aligned}
\hat g(t)=&\int_{a}^{b}{g(x)\e^{-\i tx}\,\d x}=\int_{a}^{b}{g(x)\left(\sum_{n=0}^\infty\frac{(-\i tx)^n}{n!}\right)\,\d x}\\=&\sum_{n=0}^\infty{\frac{(-\i t)^n}{n!}}\left(\int_{a}^{b}{x^ng(x)\,\d x}\right)
\end{aligned}$$
>由(I), 我们有 $\hat g(t)=0$. 由Fourier变换的性质, $g=0$ a.e. 从而 $[g]_{\ms L^q}=[0]_{\ms L^q}$. 矛盾, 故多项式集 $\R[x]|_{[a,b]}$ 在 $\ms L^p$ 中稠密.

当然, 此定理也可视为[[Stone-Weierstrass定理]]的推论.
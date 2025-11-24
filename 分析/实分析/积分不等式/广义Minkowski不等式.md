#分析 

>[!theorem] 广义Minkowski不等式
>对于$1\le p<\infty$设$(X,\mc A,\mu)$和$(Y,\mc B,\nu)$是[[σ-有限]]的[[测度空间]], $f$是其乘积空间上的非负实[[可测映射|可测函数]], 则
>$$\left(\int_X{\left(\int_Y{f(x,y)\,\d\nu}(y)\right)^p\,\d\mu}(x)\right)^{1/p}\le\int_Y{\left(\int_X{f(x,y)^p\,\d\mu}(x)\right)^{1/p}\,\d\nu}(y)$$
>写作范数记号即
>$$\norm{\int_Y{f(\cdot,y)\,\d\nu}(y)}_{\ms{L}^p(\mu)}\le\int_Y{\norm{f(\cdot,y)}_{\ms{L}^p(\mu)}\,\d\nu}(y)$$
>其中$f(\cdot,y)$是固定$y$后$x$的函数.

>[!proof]
>$p=1$时证明是平凡的, 下面设$1<p<\infty$, 记$q$为$p$的[[共轭指数]]. 不妨令
>$$g(x)=\int_Y{f(x,y)\,\d\nu}(y),\quad H=\int_X{g(x)^p\,\d\mu}(x)$$
>则
>$$\mathrm{LHS}^p=H=\int_X{g(x)^p\,\d\mu}(x)=\int_X{g(x)^{p-1}\cdot g(x)\,\d\mu}(x)=\int_X{g(x)^{p-1}\left(\int_Y{f(x,y)\,\d\nu}(y)\right)\,\d\mu}(x)$$
>将$g(x)^{p-1}f(x,y)$视作一个函数整体, $g(x)^{p-1}$相对关于$y$的积分是一个常数, 因此可以由线性性直接加入积分式, 再由[[Fubini定理]]有
>$$H=\int_X{\left(\int_Y{g(x)^{p-1}f(x,y)\,\d\nu}(y)\right)\,\d\mu}(x)=\int_Y{\left(\int_X{g(x)^{p-1}f(x,y)\,\d\mu}(x)\right)\,\d\nu}(y)\tag{I}$$
>不妨记
>$$I=\int_X{g(x)^{p-1}f(x,y)\,\d\mu}(x)$$
>接下来我们对$I$作用[[Hölder不等式]]: 考虑$I$作为$g(x)^{p-1}$与$f(x,y)$乘积的积分, 则
>$$I\le\left(\int_X{(g(x)^{p-q})^q\,\d\mu}(x)\right)^{1/q}\left(\int_X{f(x,y)^p\,\d\mu}(x)\right)^{1/p}=\left(\int_X{g(x)^p\,\d\mu}(x)\right)^{1/q}\cdot\norm{f(\cdot,y)}_{\ms{L}^p(\mu)}$$
>代回(I)有
>$$H\le\int_Y{\left[\left(\int_X{g(x)^p\,\d\mu}(x)\right)^{1/q}\cdot\norm{f(\cdot,y)}_{\ms{L}^p(\mu)}\right]\,\d\nu}(y)$$
>将与$y$无关的项提到外层积分外:
>$$H\le\left(\int_X{g(x)^p\,\d\mu}(x)\right)^{1/q}\cdot\int_Y{\norm{f(\cdot,y)}_{\ms{L}^p(\mu)}\,\d\nu}(y)=H^{1/q}\cdot\int_Y{\norm{f(\cdot,y)}_{\ms{L}^p(\mu)}\,\d\nu}(y)$$
>若$H=0$, 则$g(x)=0$ a.e. 不等式平凡地成立.
>若$0<H<\infty$, 则同除$H^{1/q}$, 有
>$$\mathrm{LHS}=H^{1/p}=\frac{H}{H^{1/q}}\le\int_Y{\norm{f(\cdot,y)}_{\ms{L}^p(\mu)}\,\d\nu}(y)=\mathrm{RHS}$$
>证毕.

显然, 常规的[[Minkowski不等式]]是这种情况的一个推论: 我们构造测度空间$(\set{\,0,1\,},\wp \set{\,0,1\,},\mu_c)$, 其中测度为[[计数测度]], 就得到了原本的特殊情形. 一般Minkowski不等式的一个比较重要的推论是能把Minkowski不等式推广到级数形式:

>[!corollary] 推论1
>若$1\le p\le \infty$, 函数列$(f_n)\subset \ms{L}^p$, 则
>$$\norm{\sum_{n=1}^\infty{f_n}}_p\le\sum_{n=1}^\infty{\norm{f_n}_p}$$


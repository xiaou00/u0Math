#分析 

>[!lemma] Fermat引理
>设$X,Y$是[[赋范空间]], $Y$具有[[序拓扑]]且和范数诱导的拓扑相同, 若函数$f:X\supset U\to Y$在点$x_0$处[[Fréchet微分|Fréchet可微]]且$x_0$是$f$的[[极值点]], 那么$\D f(x_0)=O$为零[[算子]].

>[!proof]
>由于$f$在$x_0$处可微, 从而
>$$f(x_0+h)-f(x_0)=\D f(x_0)h+r(h),\quad\lim_{\norm h_X\to 0}{\frac{r(h)}{\norm h_X}}=\vec 0_Y\tag{I}$$
>设$X$的底域为$\mathbb K$, 它是一个赋范的[[拓扑域]]. 考虑任意一个点$h\in X(h\ne \vec 0)$, 定义一个单变量函数$g:\mc B_{\mathbb K}(0,\delta)\to Y$定义如下:
>$$g(t)=f(x_0+th)$$
>其中, $\delta$充分小, 使得对于$\norm t<\delta$时一定有$x_0+th\in U$. 将上述定义代入(I), 先用$th$替换$h$,
>$$f(x_0+th)-f(x_0)=\D f(x_0)(th)+r(th)$$
>由$\D f(x_0)$的线性性,
>$$f(x_0+th)-f(x_0)=t\cdot\D f(x_0)h+r(th)$$
>同除$t$,
>$$\frac{f(x_0+th)-f(x_0)}{t}=\D f(x_0)h+\frac{r(th)}{t}$$
>即
>$$\frac{g(t)-g(0)}{t}=\D g(0)h+\frac{r(th)}{t}$$
>令$t\to 0$, 显然
>$$\lim_{t\to 0}{\frac{r(th)}{t}}=\lim_{t\to 0}{\frac{r(th)}{\norm{th}_X}\cdot\frac{\norm{th}_X}{t}}=\vec 0_Y$$
>因此$g$在$t=0$处F-可微, 且其导数
>$$\dd tg(0)=\lim_{t\to 0}{\frac{g(t)-g(0)}{t}}=\D f(x_0)h\in\mathbb K\tag{II}$$
>假设$x_0$是$f$的极小值点, 那么$t=0$是$g(t)$的极小值点. 当$t>0$时, 
>$$\frac{g(t)-g(0)}{t}\ge\frac{\vec 0_Y}{t}=\vec 0_Y$$
>取极限, 由(II)可得
>$$\dd tg(0)=\D f(x_0)h=\lim_{t\to 0}{\frac{g(t)-g(0)}{t}}\ge\vec 0_Y\tag{III.I}$$
>当$t<0$时, 
>$$\frac{g(t)-g(0)}{t}\le\vec 0_Y$$
>这是由于$g(t)-g(0)\ge\vec 0_Y$ (极小性)且$t<0$, 取极限, 由(II)可得
>$$\dd tg(0)=\D f(x_0)h=\lim_{t\to 0}{\frac{g(t)-g(0)}{t}}\le\vec 0_Y\tag{III.II}$$
>结合(III.I), (III.II)就得到了
>$$\D f(x_0)h=\vec 0_Y$$
>又由于$h$是任意的, 因此$\D f(x_0)=O$为零算子. 极大值同理.



#分析 

>[!theorem] Hölder不等式
>设$p\in[1,\infty]$, $q$满足$1 /p+1 /q=1$ (即$p,q$为[[共轭指数]]), $f,g$为$X$上的[[可测映射|可测函数]], 则
>$$\int_X{|fg|\,\d\mu}=\norm{fg}_1\le\norm{f}_p\norm{g}_q=\left(\int_X{|f|^p\,\d\mu}\right)^{1/p}\left(\int_X{|g|^q\,\d\mu}\right)^{1/q}$$
>并且若$f\in \ms{L}^p$, $g\in \ms L^q$, 则$fg\in \ms{L}^1$. 等号成立当且仅当:
>- 当$1<p,q<\infty$时, $|f|^p$和$|g|^q$[[几乎处处]]成比值为常数.
>- 当$p=1,q=\infty$时, $g$在$f$的零点集外几乎处处等于$\norm{g}_\infty$.

>[!proof]
>不妨令
>$$F(x)=\frac{|f(x)|}{\norm{f}_p},\quad G(x)=\frac{|g(x)|}{\norm{g}_q}$$
>则
>$$\norm{F}_p^p=\int_X{|F(x)|^p\,\d\mu}=\int_X{\left(\frac{|f|}{\norm{f}_p}\right)^p\,\d\mu}=\frac{1}{\norm{f}_p^p}\int_X{|f(x)|^p\,\d\mu}=\frac{\norm{f}_p^p}{\norm{f}_p^p}=1\tag{I}$$
>同理
>$$\norm{G}_p^p=1\tag{II}$$
>由[[Young不等式]], 
>$$F(x)G(x)\le\frac{F(x)^p}{p}+\frac{G(x)^q}{q}$$
>对上述不等式积分得
>$$\begin{aligned}\int_X{F(x)G(x)\,\d\mu}(x)\le\int_X{\left(\frac{F(x)^p}p+\frac{G(x)^q}q\right)\,\d\mu}(x)=\frac1p\int_X{F(x)^p\,\d\mu}(x)+\frac1q\int_X{G(x)^q\,\d\mu}(x)=\frac1p+\frac1q=1\end{aligned}$$
>其中第三项和第四项之间代入了(I)和(II). 我们回代$F(x), G(x)$的定义:
>$$\int_X{\frac{|f|}{\norm{f}_p}\cdot\frac{|g|}{\norm{g}_q}\,\d\mu}\le1\iff\frac1{\norm{f}_p\norm{g}_q}\int_X{|fg|\,\d\mu}\le 1\iff\norm{fg}_1\le\norm{f}_p\norm{g}_q$$
>容易证明$f\in \ms{L}^p$, $g\in L^q$蕴含$fg\in \ms{L}^1$. 定理得证.

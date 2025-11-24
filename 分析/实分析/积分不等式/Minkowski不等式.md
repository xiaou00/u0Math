#分析 

>[!theorem] Minkowski不等式
>若$1\le p\le \infty$, $f,g\in \ms{L}^p$, 则
>$$\left(\int_{X} |f+g|^p\,\d\mu\right)^{1/p}=\norm{f+g}_p\le\norm{f}_p+\norm{g}_p=\left(\int_{X} |f|^p \,\d\mu\right)^{1/p} + \left(\int_{X} |g|^p\,\d\mu\right)^{1/p}$$
>若$0<p\le1$, 则不等式反号. 其中$\norm{\cdot}_p$为[[Lp空间|Lp范数]].

>[!proof]
>若$p=1,\infty$, 证明是平凡的. 否则由实/复数的三角不等式$|f+g|\le|f|+|g|$, 有
>$$|f+g|^p\le|f|\cdot|f+g|^{p-1}+|g|\cdot|f+g|^{p-1}$$
>对两边积分, 有
>$$\int_X{|f+g|^p\,\d\mu}\le\int_X{|f|\cdot|f+g|^{p-1}\,\d\mu}+\int_X{|g|\cdot|f+g|^{p-1}\,\d\mu}\tag{I}$$
>将左侧积分记作$I$,
>$$I=\int_X{|f+g|^p\,\d\mu}=\norm{f+g}_p^p$$
>设$q$是$p$的[[共轭指数]], 即$1/p+1/q=1$, 那么$(p-1)q=p$. 我们对(I)右边第一项作用[[Hölder不等式]],
>$$\begin{aligned}&\int_X{|f|\cdot|f+g|^{p-1}\,\d\mu}=\norm{|f|\cdot|f+g|^{p-1}}_1\le\norm{f}_p\norm{|f+g|^{p-1}}_q=\norm{f}_p\left(\int_X{(|f+g|^{p-1})^q\,\d\mu}\right)^{1/q}\\=&\norm{f}_p\left(\int_X{|f+g|^{(p-1)q}\,\d\mu}\right)^{1/q}=\norm{f}_p\left(\int_X{|f+g|^{p}\,\d\mu}\right)^{1/q}=\norm{f}_p\cdot I^{1/q}\end{aligned}\tag{II}$$
>同理, 对另一项作用Hölder不等式有
>$$\int_X{|g|\cdot|f+g|^{p-1}\,\d\mu}\le\norm{g}_p\cdot I^{1/q}\tag{III}$$
>将(II), (III)代入(I), 有
>$$I\le\norm{f}_p\cdot I^{1/q}+\norm{g}_p\cdot I^{1/q}=(\norm{f}_p+\norm{g}_p)\cdot I^{1/q}\implies \frac{I}{I^{1/q}}\le\norm{f}_p+\norm{g}_p$$
>而
>$$\frac I{I^{1/q}}=I^{1-1/q}=I^{1/p}=(\norm{f+g}_p^p)^{1/p}=\norm{f+g}_p$$
>这就证明了定理.


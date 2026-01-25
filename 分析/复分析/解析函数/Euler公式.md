#分析 

或许没学过数学的也听说过这个看上去很优雅的公式$\e^{\i\pi}+1=0$, 然而这玩意顶多算一个机缘巧合, 数学语境下Euler公式是指[[三角函数]]的等价定义式:

>[!thm] Euler公式
>$$\cos z=\frac{\e^{\i z}+\e^{-\i z}}{2},\quad\sin z=\frac{\e^{\i z}-\e^{-\i z}}{2\i}$$

>[!pf]
>显然
>$$\frac{\e^{\i z}+\e^{-\i z}}{2}=\frac{\sum_{n=0}^\infty{\frac{(\i z)^n}{n!}}+\sum_{n=0}^\infty{\frac{(-\i z)^n}{n!}}}{2}=\sum_{n=0}^\infty{\frac{\i^nz^n+(-\i)^nz^n}{2\cdot n!}}$$
>上述级数项在$n\equiv1\pmod{2}$时恒为0, 当$n\equiv 2\pmod 4$时为
>$$\frac{-2z^n}{2\cdot n!}=\frac{-z^n}{n!}$$
>当$n\equiv0\pmod 4$时为
>$$\frac{z^n}{n!}$$
>从而级数化为
>$$\sum_{n=0}^\infty{(-1)^n}\frac{z^{2n}}{(2n)!}=\cos z$$
>对于$\sin z$的讨论也是类似的.


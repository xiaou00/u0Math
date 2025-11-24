#分析 

>[!theorem] Cauchy中值定理
>设函数$f,g$在闭区间$[a,b]$上连续, 在$(a,b)$上[[微分|可微]], 若对任意$x\in(a,b)$都有$g'(x)\ne 0$, 则存在$\xi\in (a,b)$使得
>$$\frac{f'(\xi)}{g'(\xi)}=\frac{f(b)-f(a)}{g(b)-g(a)}$$

>[!proof]
>由[[Lagrange中值定理]], 存在$\xi\in(a,b)$使得
>$$g(b)-g(a)=g'(\xi)(b-a)$$
>由于对于任一$x\in(a,b)$都有$g'(x)\ne0$, 从而$g(a)-g(b)\ne 0$, 令
>$$h(x)=\frac{f(b)-f(a)}{g(b)-g(a)}[g(x)-g(a)]+f(a)-f(x)$$
>则$h(x)$在闭区间$[a,b]$上连续, 在开区间$(a,b)$上可微, 且$h(a)=h(b)=0$. 由[[Rolle中值定理]], 存在$\xi\in(a,b)$使得
>$$0=h'(x)=\frac{f(b)-f(a)}{g(b)-g(a)}\cdot g'(\xi)-f'(\xi)\implies\frac{f'(\xi)}{g'(\xi)}=\frac{f(b)-f(a)}{b-a}$$


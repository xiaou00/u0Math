#分析 

<s>总之洛就完了!!!</s>

>[!theorem] 0/0型l'Hôpital法则 (右侧)
>设实函数$f,g$在开区间$(x_0,b)$上[[微分|可微]], 且对任意$x\in(x_0,b)$都有$g(x)\ne 0$. 若
>$$\lim_{x\to x_0^+}{f(x)}=\lim_{x\to x_0^+}{g(x)}=0$$
>且[[函数极限|极限]]$\lim_{x\to x_0^+}{\frac{f'(x)}{g'(x)}}$存在, 则极限$\lim_{x\to x_0^+}{\frac{f(x)}{g(x)}}$也存在, 且
>$$\lim_{x\to x_0^+}{\frac{f'(x)}{g'(x)}}=\lim_{x\to x_0^+}{\frac{f(x)}{g(x)}}$$

>[!proof]
>令$f(x_0)=g(x_0)=0$. 于是$f(x),g(x)$在$[x_0,b)$上连续. 对于任一给定的$x\in(x_0,b)$, 由[[Cauchy中值定理]], 存在$\xi\in(x_0,x)$使得
>$$\frac{f'(\xi)}{g'(\xi)}=\frac{f(x)-f(x_0)}{g(x)-g(x_0)}=\frac{f(x)}{g(x)}$$
>从而当$x\to x_0^+$时, $\xi\to x_0^+$. 于是可知
>$$\lim_{x\to x_0^+}{\frac{f(x)}{g(x)}}=\lim_{\xi\to x_0^+}{\frac{f'(\xi)}{g'(\xi)}}=\lim_{x\to x_0^+}{\frac{f'(x)}{g'(x)}}$$

同理有以下情况:

>[!theorem] 0/0型l'Hôpital法则 (左侧)
>设实函数$f,g$在开区间$(a,x_0)$上[[微分|可微]], 且对任意$x\in(a,x_0)$都有$g(x)\ne 0$. 若
>$$\lim_{x\to x_0^-}{f(x)}=\lim_{x\to x_0^-}{g(x)}=0$$
>且[[函数极限|极限]]$\lim_{x\to x_0^-}{\frac{f'(x)}{g'(x)}}$存在, 则极限$\lim_{x\to x_0^-}{\frac{f(x)}{g(x)}}$也存在, 且
>$$\lim_{x\to x_0^-}{\frac{f'(x)}{g'(x)}}=\lim_{x\to x_0^-}{\frac{f(x)}{g(x)}}$$

结合上述两个定理, 有如下形式:

>[!theorem] 0/0型l'Hôpital法则 (常规)
>设实函数$f,g$在开区间$(a,b)$上[[微分|可微]], 且对任意$x\in(a,b)\setminus\set{x_0}$都有$g(x)\ne 0$. 若
>$$\lim_{x\to x_0}{f(x)}=\lim_{x\to x_0}{g(x)}=0$$
>且[[函数极限|极限]]$\lim_{x\to x_0}{\frac{f'(x)}{g'(x)}}$存在, 则极限$\lim_{x\to x_0}{\frac{f(x)}{g(x)}}$也存在, 且
>$$\lim_{x\to x_0}{\frac{f'(x)}{g'(x)}}=\lim_{x\to x_0}{\frac{f(x)}{g(x)}}$$

对于$x\to+\infty$也有对应的形式:

>[!theorem] 0/0型l'Hôpital法则 (无穷)
>设函数$f,g$在开区间$(a,+\infty)$上[[微分|可微]], 且对任意$x\in(a,+\infty)$都有$g(x)\ne 0$. 若
>$$\lim_{x\to+\infty}{f(x)}=\lim_{x\to+\infty}{g(x)}=0$$
>且[[函数极限|极限]]$\lim_{x\to+\infty}{\frac{f'(x)}{g'(x)}}$存在, 则极限$\lim_{x\to+\infty}{\frac{f(x)}{g(x)}}$也存在, 且
>$$\lim_{x\to+\infty}{\frac{f'(x)}{g'(x)}}=\lim_{x\to+\infty}{\frac{f(x)}{g(x)}}$$

>[!proof]
>只需令$t=1/x$, 当$x\to+\infty$时, $t\to 0^+$. 代入右极限的l'H法则即证.

>[!theorem] $\infty/\infty$型l'Hôpital法则
>设函数$f,g$在开区间$(x_0,b)$上可微, 且对任意$x\in(x_0,b)$有$g(x)\ne 0$. 若
>$$\lim_{x\to x_0^+}{g(x)}=\infty$$
>若极限$\lim_{x\to x_0^+}{\frac{f'(x)}{g'(x)}}$存在, 则极限$\lim_{x\to x_0^+}{\frac{f(x)}{g(x)}}$也存在, 且
>$$\lim_{x\to x_0^+}{\frac{f'(x)}{g'(x)}}=\lim_{x\to x_0^+}{\frac{f(x)}{g(x)}}$$

>[!proof]
>令
>$$l=\lim_{x\to x_0^+}{\frac{f'(x)}{g'(x)}}$$
>只证明$l\in\R$的情况. 由定义, 对任意$\epsilon>0$, 存在$\delta>0$, 使得
>$$x\in(x_0,x_0+\delta)\implies l-\epsilon<\frac{f'(x)}{g'(x)}<l+\epsilon$$
>对于$(x,c)\subset(x_0,x_0+\delta)$, 由[[Cauchy中值定理]], 存在$\xi\in(x,c)$使得
>$$\frac{f(x)-f(c)}{g(x)-g(c)}=\frac{f'(\xi)}{g'(\xi)}$$
>因此
>$$l-\epsilon<\frac{f(x)-f(c)}{g(x)-g(c)}<l+\epsilon\iff l-\epsilon<\frac{\frac{f(x)}{g(x)}-\frac{f(c)}{g(x)}}{1-\frac{g(c)}{g(x)}}<l+\epsilon\tag{I}$$
>固定$c$, 由于$\lim_{x\to x_0^+}{g(x)}=\infty$, 因此令上式右半不等式的$x\to x_0^+$, 取上极限可得
>$$\limsup_{x\to x_0^+}{\frac{f(x)}{g(x)}}\le l+\epsilon$$
>令$\epsilon\to 0$得
>$$\limsup_{x\to x_0^+}{\frac{f(x)}{g(x)}}\le l$$
>固定$c$, 对(I)式左半取下极限再令$\epsilon\to 0$可得
>$$\liminf_{x\to x_0^+}{\frac{f(x)}{g(x)}}\ge l$$
>从而
>$$\lim_{x\to x_0^+}{\frac{f(x)}{g(x)}=l}$$


#分析 

>[!theorem] Egorov定理
>设$f$和函数列$(f_n)$都是$E$上[[几乎处处]]有限的[[可测映射|可测函数]], 且$m(E)<\infty$. 若$f_n$在$E$上[[几乎处处收敛]]于$f$, 则对任意$\delta>0$, 存在$E$的可测子集$E_\delta$满足$m(E_\delta)\le\delta$且$(f_n)$在$E\setminus E_\delta$上[[一致收敛]]于$f$.

>[!lemma] 引理1
>设$f$和函数列$(f_n)$都是$E$上[[几乎处处]]有限的[[可测映射|可测函数]], 且$m(E)<\infty$. 若$f_n$在$E$上[[几乎处处收敛]]于$f$, 则对任意$\epsilon>0$, 令
>$$E_k(\epsilon)=\set{x\in E:|f_k(x)-f(x)|\ge\epsilon}$$
>即, 使得$f_k(x)$和$f(x)$相差大于等于$\epsilon$的全体$x$. 则
>$$\lim_{j\to\infty}{m\left(\bigcup_{k=j}^\infty{E_k(\epsilon)}\right)}=0$$

>[!proof] Proof (引理)
>显然上限集
>$$\bigcap_{j=1}^\infty{\bigcup_{k=j}^\infty}{E_k(\epsilon)}$$
>中的点就是$(f_n)$中不收敛的那些点. 从而由几乎处处收敛可知
>$$m\left(\bigcap_{j=1}^\infty{\bigcup_{k=j}^\infty}{E_k(\epsilon)}\right)=0$$
>显然交集内部是递减序列, 于是可以写成
>$$\lim_{j\to\infty}{m\left(\bigcup_{k=j}^\infty{E_k(\epsilon)}\right)}=0$$

>[!proof] 
>应用上述引理, 对任给的$\epsilon>0$有
>$$\lim_{j\to\infty}{m\left(\bigcup_{k=j}^\infty{E_k(\epsilon)}\right)}=0$$
>现在取正数列$1/i(i=1,2,\ldots)$, 则对任给的$\delta>0$以及每一个$i$, 存在$j_i$使得
>$$m\left(\bigcup_{k=j_i}^\infty{E_k(1 /i)}\right)<\frac\delta{2^i}$$
>令
>$$E_\delta=\bigcup_{i=1}^\infty{\bigcup_{k=j_i}^\infty{E_k(1 /i)}}$$
>我们有
>$$m(E_\delta)\le\sum_{i=1}^\infty{m\left(\bigcup_{k=j_i}^\infty{E_k(1 /i)}\right)}\le\sum_{i=1}^\infty{\frac\delta{2^i}=\delta}$$
>接下来我们证明在点集
>$$E\setminus E_\delta=\bigcap_{i=1}^\infty{\bigcap_{k=j_i}^\infty\set{x\in E:|f_k(x)-f(x)|<\frac1i}}$$
>上, $\set{f_k(x)}$一致收敛于$f(x)$. 事实上, 对于任给的$\epsilon>0$, 存在$i$, 使得$1 /i<\epsilon$, 从而对一切$x\in E\setminus E_\delta$, 当$k\ge j_i$时都有
>$$|f_k(x)-f(x)|<\frac1i<\epsilon$$
>这说明$f_k(x)$在$E\setminus E_\delta$上一致收敛于$f(x)$.

上述定理是[[Littlewood三原则]]的第三个原则的体现.
#分析 

>[!theorem] Lebesgue分解定理
>若$(X,\Sigma)$是一个[[可测空间]], $\mu,\nu$是定义在$\Sigma$上的[[σ-有限]]的[[广义测度]], 则存在两个唯一的σ-有限广义测度$\nu_0$和$\nu_1$使得其分别关于$\mu$[[奇异测度|奇异]]以及[[绝对连续]].
>$$\nu=\nu_0+\nu_1,\quad\nu_0\perp\mu,\quad\nu_1\ll\mu$$

>[!proof]
>不失一般性, 我们令$\nu$为非负测度, 否则由[[Jordan分解]], 将其分解为上下变差再分别证明即可.
>我们也可以令$\mu$是非负测度, 因为若$\nu_0$关于$|\mu|$奇异, 则必然关于$\mu$奇异. 若$\nu_1$关于$|\mu|$绝对连续, 也必然关于$\mu$绝对连续.
>定义测度$\lambda=\mu+\nu$, 由于$\mu,\nu$都是σ-有限的非负测度, 从而$\lambda$也是σ-有限的非负测度. 显然, $\nu\ll\lambda$, 这是因为如果$\lambda(E)=\mu(E)+\nu(E)=0$, 由非负性, $\nu$必为0. 由[[Radon-Nikodym定理]], 存在[[Radon-Nikodym导数]]$f=\d\nu /\d\lambda$使得对任意$E\in\Sigma$都有
>$$\nu(E)=\int_E{f\,\d\lambda}=\int_E{f\d\mu}+\int_E{f\,\d\nu}$$
>由于$\nu(E)\le \lambda(E)$, 我们可以证明$0\le f\le1$ $\lambda$-a.e. 因此$0\le f\le1$ $\nu$-a.e.现在我们将空间$X$分解成两个互不相交的集合$A,B$:
>$$A=\set{x\in X:f(x)=1}\quad B=\set{x\in X:f(x)<1}$$
>则
>$$\nu(A)=\int_A{\d\mu}+\int_A{\d\nu}=\mu(A)+\nu(A)$$
>从而$\mu(A)=0$. 对每个可测集$E$, 我们定义
>$$\nu_0(E)=\nu(E\cap A),\quad\nu_1(E)=\nu(E\cap B)$$
>显然$\nu_0\perp\mu$, 下面证明$\nu_1\ll\mu$. 若$\mu(E)=0$, 则
>$$\int_{E\cap B}{\d\nu}=\nu(E\cap B)=\int_{E\cap B}{f\,\d\nu}$$
>因此由$\int_{E\cap B}{(1-f)\,\d\nu}=0$, 由于$1-f\ge0$ $\nu$-a.e. 于是$\nu_1(E)=\nu(E\cap B)=0$, 这就证明了绝对连续.
>下面证明唯一性, 设$\nu=\nu_0+\nu_1$, $\nu=\nu_0'+\nu_1'$都满足条件, 则
>$$\nu_1-\nu_1'=\nu_0'-\nu_0$$
>令$\lambda=\nu_1-\nu_1'$, 由于$\nu_1\ll\mu$且$\nu_1'\ll\mu$, 从而$\lambda\ll\mu$. 同时由于$\nu_0'\perp\mu$且$\nu_0\perp\mu$, 从而$\lambda=\nu_0-\nu'_0$也关于$\mu$奇异, 同时关于一个测度绝对连续且奇异的测度只能是零测度. 证毕.

>[!definition] Lebesgue分解
>若$(X,\Sigma)$是一个[[可测空间]], $\mu,\nu$是定义在$\Sigma$上的[[σ-有限]]的[[广义测度]], 那么存在两个σ-有限广义测度$\nu_0$和$\nu_1$使得其分别关于$\mu$[[奇异测度|奇异]]以及[[绝对连续]].
>$$\nu=\nu_0+\nu_1,\quad\nu_0\perp\mu,\quad\nu_1\ll\mu$$
>称之为$\nu$关于$\mu$的**Lebesgue分解**(Lebesgue decomposition).

#线性代数 

>[!theorem] Steinitz替换定理
>对于$\F$-[[线性空间]]$V$上的两个[[向量组]]$S,I\subset V$, 使得$\span{S}=V$, $I$[[线性相关|线性无关]], 那么一定存在$R\subset S$使得$|R|=|I|$, 并且$\span(I\sqcup(S\setminus R))=V$.

>[!hint] 想法
>我们尝试用归纳法, 但对于无限的情况, 数学归纳显然略逊一筹. 于是我们尝试用更强的归纳法, 即[[Zorn引理]]. 我们只需要在子集的讨论中找出极大元, 再对极大元进行讨论即可.

>[!proof] 证明
>我们构造一个集合
>$$\mathcal{P}=\set{(D,J)\big|D\subset S,J\subset I,|D|=|I|,\span(J\sqcup(S\setminus D))=V}$$ 
> ---
>**首先证明$\mathcal{P}$非空.** 由于$\span{S}=V$, $S$可以线性表示$V$的任意向量, 故存在$\vec{a}_0\in I$满足
>$$\vec{a}_0=\sum_{\vec{s}\in S}{\lambda_{\vec{s}}\vec{s}}$$必然存在一个系数不为零的$\vec{s}$, 显然有$\span(\vec{a}_0\sqcup(S\setminus\set{\vec{s}}))=V$. 此时可以取$J=\set{\vec{a}_0},D=\set{\vec{s}}$, 故$\mathcal{P}$非空.
> ---
>**证明$\mathcal{P}$的每一条链上都有极大元.** 我们定义$\mathcal{P}$上的偏序关系$\preceq$:
>$$(D,J)\preceq(D',J')\iff D\subset D'\land J\subset J'$$
>我们想证明的是$\mathcal{P}$在这个序关系下有极大元, 因此为了使用[[Zorn引理]], 我们先证明其每一条链$\set{(D_\nu,J_\nu)}\subset\mathcal{P}$都有上界$(D_\nu,J_\nu)$. 于是我们构造
>$$D_u=\bigcup_\nu{D_\nu}$$
>$$J_u=\bigcup_\nu{J_\nu}$$
>我们需要证明:
>1. $J_u\subset I,D_u\subset S$;
>2. $|J_u|=|D_u|$;
>3. $\span(J_u\sqcup(S\setminus D_u))=V$.  
>  
>若$J_u\not\subset I$, 必然存在$J_{\nu_1}\not\subset I$与假设矛盾, 故$J_u\subset I$, 同理有$D_u\subset S$.
>假设$|J_u|\ne|D_u|$, 则必有$|J_u|>|D_u|$或$|J_u|<|D_u|$. 对于前者, 一定存在$J_{\nu_0}$使得$|J_{\nu_0}|>|D_u|$, 但$|J_{\nu_0}|=|D_{\nu_0}|$, 故矛盾. 后者同理.
>假设存在$V$中的向量$\vec{\eta}$, 假设$\eta\notin\span(J_u\sqcup(S\setminus D_u))$, 那么必然存在一个$D_{\nu_1}$使得$\eta\notin\span(J_u\sqcup(S\setminus D_{\nu_1}))$, 然而$\eta\in\span(J_{\nu_1}\sqcup(S\setminus D_{\nu_1}))$必然成立, 从而矛盾.
>这就证明了$\mathcal{P}$的每一条链都有上界. 由[[Zorn引理]]得$\mathcal{P}$中有极大元$(D_m,J_m)$. 
> ---
>**证明$J_m=I$.** 用反证法. 假若不然, 则必存在非零向量$\vec{b}\in I\setminus J_m$. 然而$\vec{b}\in J_m\sqcup(S\setminus D_m)$,由于该集合线性无关, 可见$\vec{b}$不是$J_m$的线性组合. 同时由于$\vec{b}\notin J_m$, 此时$\vec{b}\cup J_m$仍然满足上述1-3条件.
> 此时显然存在非零向量$\vec{s}\in S\setminus D_m$使得$I\sqcup(S\setminus(D_m\sqcup\set{\vec{s}}))$张成$V$, 这导致我们还能往$D_m,J_m$中增加向量,与其最大性矛盾. 故$J_m=I$.
>  ---
>  **综上所述.** 我们推导出了$R=D_m\subset S$使得$|R|=|D_m|=|J_m|=|I|$, 并且$\span(I\sqcup(S\setminus R))=V$.

上述定理有一个重要的推论:

> [!corollary] 推论1
> [[等价(向量组)|等价]]向量组[[基数]]相同.

> [!proof] 证明
> 设$S,S'$是等价向量组可以推出$S\subset\span{S'},S'\subset\span{S}$, 从而$|S|\le|S'|,|S'|\le|S|$, 由[[Cantor-Schröder-Bernstein定理]]得$|S|=|S'|$.

由此, 容易证明

> [!corollary] 推论2
> 同一个向量组的[[极大线性无关组]]的基数一定相同.

这是极大线性无关组的一个非常重要的结论, 这也使得我们可以良定义向量组的秩.


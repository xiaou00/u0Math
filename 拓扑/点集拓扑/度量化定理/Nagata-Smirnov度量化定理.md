#点集拓扑 
##### 前置
- [[局部有限性]]
- [[加细]]

>[!theorem] Nagata-Smirnov度量化定理 (Nagata-Smirnov metrization theorem)
>空间$X$可度量化当且仅当$X$是正则的且具有可数局部有限基.

为了证明这个定理, 我们回顾$G_\delta$集的概念

>[!definition] $G_\delta$集
>如果空间$X$的一个子集$A$等于$X$的可数个开子集的交, 则称$A$为$X$中的一个**$G_\delta$集**($G_\delta$ set).

显然$X$的每个开子集都是$G_\delta$集, 第一可数(C1)的Hausdorff(T2)空间中, 每个单点集也是$G_\delta$集. 可度量化空间的每一个闭集也是$G_\delta$集, 只要取其任意$\epsilon$-邻域的交即可.

>[!lemma] 引理1
>设$X$正则且具有可数局部有限基$\ms{B}$, 则$X$正规, 并且$X$的每个闭集都是$G_\delta$集.

>[!proof]
>I.
>设$W$是$X$的一个开集, 我们要证明存在$X$的开集的一个可数族$\set{U_n}$, 使得
>$$W=\bigcup{U_n}=\bigcup{\clos{U_n}}$$
>因为$\ms{B}$是$X$的可数局部有限基, 故可以写作$\ms{B}=\bigcup{\ms{B}_n}$, 其中每个$\ms{B}_n$都是局部有限的. 设$\ms{C}_n$是$\ms{B}$中满足$B\in\ms{B}$且$\clos{B}\subset W$的全体元素$B$组成的族 (对每个$n$), 那么$\ms{C}_n$是局部有限的, 这是因为它是$\ms{B}_n$的子集的一个族, 定义
>$$U_n=\bigcup_{B\in\ms{C}_n}{B}$$
>那么$U_n$是开集, 并且由[[局部有限性|此页面引理1(局部有限性质)]], 
>$$\clos{U_n}=\bigcup_{B\in\ms{C}_n}{\clos{B}}$$
>因此$\clos{U_n}\subset W$, 从而
>$$\bigcup{U_n}\subset\bigcup{\clos{U_n}}\subset W$$
>我们断言等号成立, 给定$x\in W$, 由正则性可知存在$B\in\ms{B}$使得$x\in B$和$\clos{B}\subset W$. 现在, 对某个$n$一定有$B\in\ms{B}_n$, 由定义显然$B\in\ms{C}_n$, 从而$x\in U_n$, 于是$W\subset \bigcup{U_n}$.
>
>---
>II.
>下面证明$X$的每个闭集$C$都是$G_\delta$集. 给定闭集$C$, 令$W=X-C$. 由第一步知, 存在$X$中集合$U_n$使得$W=\bigcup{\clos{U_n}}$, 于是
>$$C=\bigcap(X-\clos{U_n})$$
>这就直接证明了$C$是可数个开集的交.
>
>---
>III.
>最后证明$X$的正规性, 设$C,D$是$X$中无交的闭集, 对于开集$X-D$应用(I)的结论, 构造可数的开集族$\set{U_n}$, 使得$\bigcup{U_n}=\bigcup{\clos{U_n}}=X-D$, 于是$\set{U_n}$覆盖$C$, 并且每一个$\clos{U_n}$都与$D$无交. 类似地, 存在$D$的可数开覆盖$\set{V_n}$, 并且每一个$V_n$的闭包也与$C$无交. 不妨令
>$$U'_n=U_n-\bigcup_{i=1}^n{\clos{V_i}}\quad V'_n=V_n-\bigcup_{i=1}^n{\clos{U_i}}$$
>则集合
>$$U'=\bigcup_{n\in\Z_+}{U'_n}\quad V'=\bigcup_{n\in\Z_+}{V'_n}$$
>是分别包含$C$和$D$的无交开集.

>[!lemma] 引理2
>设$X$是正规空间, $A$是$X$的一个闭的$G_\delta$子集, 则存在连续函数$f:X\to[0,1]$使得当$x\in A$时$f(x)=0$, 当$x\notin A$时有$f(x)>0$.

>[!proof]
>设$A$为可数个开集的交$A=\bigcup_{n\in\Z_+}{U_n}$, 对于每个$n$都选取连续函数$f_n:X\to[0,1]$, 使得当$x\in A$时, $f_n(x)=0$, 当$x\in X-U_n$时$f_n(x)=1$, 定义函数
>$$f(x)=\sum_{n=1}^\infty{\frac{f_n(x)}{2^n}}$$
>通过与$\sum_{n=1}^\infty{\frac{1}{2^n}}$比较易证其是一致收敛的, 从而$f$连续, 并且在$A$上取值为0, 在$X-A$上取正值.

 现在我们来给出Nagata-Smirnov度量化定理的完整证明:

>[!proof]
>I.
>设$X$正则且有可数局部有限基$\ms{B}$, 则$X$正规, 并且$X$的每个闭子集都是$G_\delta$集. 对于某一个$J$, 我们将把$X$嵌入度量空间$(\R^J,\bar{\rho})$中 (一致度量), 从而说明$X$可度量化.
>
>设$\ms{B}=\bigcup{\ms{B}_n}$, 其中每个$\ms{B}_n$都是局部有限的. 对于每一个整数$n$和$\ms{B}_n$中任一基元素$B$, 选取一个连续函数
>$$f_{n,B}:X\to[0,1 /n]$$
>使得对任意$x\in  B$有$f_{n,B}(x)>0$, 对于$x\notin B$有$f_{n,B}(x_0)=0$. 于是函数族$\set{f_{n,B}}$分离$X$中的点和闭集, 这是因为对于任给的点$x_0$和$x_0$的一个邻域都存在一个基元素$B$使得$x_0\in B\subset U$, 并且对于某一个$n$有$B\in\ms{B}_n$, 从而$f_{n,B}(x_0)>0$, 并且$f_{n,B}(x_0)$在$U$的补集上取零值.
>
>设$J$是$\Z_+\times\ms{B}$的一个子集, 它由全体满足$B\in\ms{B}_n$的偶对$(n,B)$组成, 我们定义
>$$F:X\to[0,1]^J$$ 为
>$$F(x)=(f_{n,B}(x))_{(n,B)\in J}$$
>由[[Urysohn度量化定理|嵌入定理]], 映射$F$是到$[0,1]^J$积拓扑的一个嵌入.
>
>现在我们在$[0,1]^J$上取一致度量$\bar{\rho}$诱导的拓扑, 并且证明相对于该拓扑, $F$也是一个嵌入. 由于一致拓扑细于积拓扑, 因此相较于度量$\bar{\rho}$, 映射$F$是单射且将$X$中的开集映成像空间$Z=F(X)$中的开集. 我们只需要证明$F$连续即可.
>注意到在$\R^J$的子空间$[0,1]^J$上一致度量等价于度量
>$$\rho((x_\alpha),(y_\alpha))=\sup\set{|x_\alpha,y_\alpha|}$$
>为了证明连续, 我们取定$X$的一个点$x_0$以及一个数$\epsilon>0$. 并取定$x_0$的一个领域$W$, 使得
>$$x\in W\implies \rho(F(x),F(x_0))<\epsilon$$
>固定$n$, 选取$x_0$的一个邻域$U_n$, 使得其于$\ms{B}_n$中的有限多个成员相交 (局部有限). 也就是说, 当$B$在$\ms{B}_n$上变动时, 函数族除了有限多个以外, 其余的都在$U_n$上恒等于$0$ (定义), 因为每一个$f_{n,B}$连续, 可以选取$x_0$的一个邻域$V_n$包含于$U_n$并且在$V_n$上, 当$B\in\ms{B}_n$时, 每一个保留下的函数$f_{n,B}$最多改变$\epsilon/2$.
>
>对于每一个$n\in\Z_+$选择$x_0$的上述邻域$V_n$, 然后选取$N$, 使得$1 /N\le\epsilon/2$. 定义$W=V_1\cap\cdots\cap V_N$. 我们断言$W$就是所求的$x_0$的邻域, 令$x\in W$. 如果$n\le N$, 因为函数$f_{n,B}$在$W$上或者恒等于$0$, 或者最多改变$\epsilon/2$, 所以
>$$|f_{n,B}(x)-f_{n,B}(x_0)|\le \epsilon/2$$
>若$n>N$, 由于$f_{n,B}$把$X$映入$[0,1/n]$, 所以
>$$|f_{n,B}(x)-f_{n,B}(x_0)|\le 1 /n< \epsilon /2$$
>综上, 最终得到
>$$\rho(F(x),F(x_0))\le \epsilon /2<\epsilon$$
>
>---
>II.
>反之, 设$X$可度量化, 显然$X$正则(甚至正规), 下面说明$X$有可数局部有限基.
>
>选取$X$的一个度量, 给定$m$, 用$\ms{A}_m$表示全体半径为$1/m$的开球组成的$X$的开覆盖. 由[[加细|该页面引理1(加细)]], 存在可数局部有限的开覆盖$\ms{B}_m$加细$\ms{A}_m$, 显然$\ms{B}_m$中每个元素的直径最多为$2 /m$ (半径最大$1 /m$), 令$\ms{B}=\bigcup_{m\in\Z_+}{\ms{B}_m}$. 因为每一个$\ms{B}_m$都是可数局部有限的, 所以$\ms{B}$也是可数局部有限的, 下面证明$\ms{B}$是$X$的一个基.
>给定$x\in X$和$\epsilon>0$, 我们的目标是证明存在$B\in\ms{B}$并且$B\subset{\mc{B}(x,\epsilon)}$. 先选取$m$, 使得满足$1/m<\epsilon /2$. 由于$\ms{B}_m$覆盖$X$, 可以选取$\ms{B}_m$中的一个元素$B$, 使得$x\in B$. 从而由$x\in B$和$B$的直径最多为$2 /m<\epsilon$可见$B$包含于$\mc{B}(x,\epsilon)$.


#分析 

>[!definition] Borel代数
>对于[[拓扑空间]]$X$, 由$X$中全体开集所生成的[[σ-代数]]称为$X$上的Borel代数(Borel algebra), 记作$\mc B(X)$. Borel代数中的元素称为$X$上的**Borel集**(Borel set).

>[!ex] 例1
>由定义, $\mc B(\R)$是由全体开集组成的, 事实上它可以用可数个集合$\set{\,(-\infty,a)\mid a\in\Q\,}$生成.

>[!theorem] 定理1
>在局部紧Hausdorff空间$X$中, Borel代数等价于全体紧致集生成的σ-代数.

>[!theorem] 定理2
>在局部紧Hausdorff空间$X$中, 每一个Borel集都是[[σ-紧致]]的, 每一个σ-紧致的开集都是Borel集.

>[!proof]
>显然每一个紧集都是σ-紧的, 所有σ-紧集组成的类是一个σ-代数, 显然这个代数包含$\mc B$. 反之, 设$U$是开集, $\set{C_n}$是紧集列使得
>$$U\subset{\bigcup_{n=1}^\infty}{C_n}=K$$
>因为$C_n-U$是紧的, 因此
>$$D=\bigcup_{n=1}^\infty(C_n-U)\in\mc B$$
>由因为$D=K-U$, $U=K-(K-U)\in\mc B$.


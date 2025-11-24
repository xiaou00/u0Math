#点集拓扑 

>[!definition] Lindelöf空间
>Lindelöf条件: $X$的每个开覆盖都有至多可数子覆盖.
>满足Lindelöf条件的空间称为**Lindelöf空间**(Lindelöf space).

>[!proposition] 性质1
>显然[[紧致性|紧致]]空间一定是Lindelöf空间.

>[!ex] 例子
>$\R$不是紧致空间, 却是Lindelöf空间. 因为$\R$满足[[第二可数性公理|C2公理]], 而C2公理蕴含Lindelöf条件.

>[!ex2] 反例
>例如, $\R$的离散拓扑就不是Lindelöf的. 因为全体单点集组成的覆盖不存在可数的子覆盖.

>[!theorem] 定理1
>Lindelöf空间的连续像是Lindelöf的.

>[!proof]
>设Lindelöf空间$X$, $f$是连续映射. 任取$Y\subset f(X)$, $\ms{A}$是$Y$的开覆盖, 那么$\ms{A}$中全体成员在$f$下的原像组成的族$\ms{A}'$是$f^{-1}(Y)$的开覆盖, 那么它有$\ms{S}'$这一可数子覆盖, 那么$\ms{S}'$中全体成员在$f$下的像组成的族$\ms{S}$对应了$\ms{A}$中的可数子覆盖.

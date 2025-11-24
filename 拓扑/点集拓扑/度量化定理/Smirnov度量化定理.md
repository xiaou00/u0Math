#点集拓扑 

下面的定理是[[Nagata-Smirnov度量化定理]]的一个推论:

>[!definition] 局部可度量化
>如果$X$的每个点$x$都有可度量化的领域 (子空间拓扑), 那么$X$是**局部可度量化**(locally metrizable)的.

>[!theorem] Smirnov可度量化定理
>空间$X$可度量化当且仅当$X$是[[仿紧致性|仿紧致]]的局部可度量化的[[Hausdorff空间]], 

>[!proof]
>若$X$可度量化, 由[[仿紧致性|此页面定理3]]可见$X$是仿紧致的, 显然它是可度量化的.
>反之, 设$X$是仿紧致的, 并且局部可度量化, 只需证明$X$有一个可数局部有限基即可. 这样通过其正则性, 由Nagata-Smirnov定理即可推出可度量化.
>
>由于每个点都有可度量化领域, 我们选择用一个可度量化开集的族覆盖, 再选取这个覆盖的局部有限开加细$\ms{C}$覆盖$X$. $\ms{C}$的每一个成员$C$都是可度量化的. 
>设函数$d_C:C\times C\to \R$是给出$C$的拓扑的一个度量, 给定$x\in X$, 考虑$\mc{B}_{d_C}(x,\epsilon)$, $\mc{B}_{d_C}(x,\epsilon)$是$C$的开集, 从而也是$X$的开集.
>给定$m\in\Z_+$, 令$\ms{A}_m$是半径$1 /m$的开球组成的$X$的开覆盖, 即
>$$\ms{A}_m=\set{\,\mc{B}_{d_C}(x,1 /m)\mid x\in C, C\in\ms{C}\,}$$
>设$\ms{D}_m$为$\ms{A}_m$的覆盖$X$的一个局部邮箱开加细 (根据仿紧致), 设$\ms{D}$是这些集族$\ms{D}_m$的并, 则$\ms{D}$是可数局部有限的. 我们断言$\ms{D}$是$X$的一个基, 从而证明原定理.
>设$x\in X$, $U$是$x$的一个邻域, 我们设法找到$\ms{D}$的一个成员$U$, 使得$x\in D\subset U$. 现在, $x$仅属于$\ms{C}$中有限多个成员, 比如说属于$C_1,C_2,\ldots, C_k$. 于是在集合$C_i$中, $U\cap C_i$是$x$的一个邻域, 所以存在一个$\epsilon_i>0$使得
>$$\mc{B}_{d_{C_i}}(x,\epsilon)\subset (U\cap C_i)$$
>选取$m$, 使得$2 /m<\min\set{\enum{\epsilon}{k}}$. 因为族$\ms{D}_m$覆盖$X$, 从而$\ms{D}_m$中必然存在一个成员$D$包含$x$. 因为$\ms{D}_m$加细$\ms{A}_m$, 所以对某一个$C\in\ms{C}$以及某一个$y\in C$, 必存在$\ms{A}_m$的一个成员$\mc{B}_{d_C}(y,1 /m)$包含$D$. 因为
>$$x\in D\subset \mc{B}_{d_C}(y,1 /m)$$
>所以$x$属于$C$, 从而$C$必然是集合$\enum{C}{k}$中的一个, 例如$C=C_i$. 又因为$\mc{B}_{d_C}(y,1 /m)$的直径最多为$2 /m<\epsilon$, 于是有
>$$x\in D\subset \mc{B}_{d_{C_i}}(x,1 /m)\subset\mc{B}_{d_{C_i}}(x,\epsilon_i)\subset U$$


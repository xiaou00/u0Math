#代数几何 

>[!thm] Noether正规化引理 (Noether Normalization Lemma)
>设 $A$ 是[[整环]], 并且在 $k$ 上是有限生成的, 若[[超越度]] $\operatorname{trdeg}\mathrm{K}(A)/k=n$, 则存在元素 $x_1,\ldots,x_n\in A$, 是在 $k$ 上[[代数无关]]的, 使得 $A$ 是 $k[x_1,\ldots,x_n]$ 的有限[[整扩张]].

>[!pf] Pf. (Nagata)
>假设我们可以写出
>$$A=k[y_1,\ldots,y_n]/\mf p$$
>并且 $A$ 有 $m$ 个生成元, 显然 $m\ge n$. 我们对 $m$ 作归纳: 基情况 $m=n$ 是显然的.
>
>现在假设 $m>n$, 且命题对更小的 $m$ 都成立, 我们能找到 $A$ 的 $m-1$ 个元素 $z_1,\ldots,z_{m-1}$, 使得 $A$ 在 $k[z_1,\ldots,z_{m-1}]/\mf q$ 上有限. 由归纳假设, $k[z_1,\ldots,z_{m-1}]/\mf q$ 在一些 $k[x_1,\ldots,x_n]$ 上有限, 而 $A$ 在 $k[z_1,\ldots,z_{m-1}]$ 上有限, 从而 $A$ 在 $k[x_1,\ldots,x_n]$ 上有限.
>	
>由于 $y_1,\ldots,y_m$ 在 $A$ 上是代数相关的, 从而存在一些非平凡的代数联系 $f(y_1,\ldots,y_m)=0$. 不妨令
>	$$z_1=y_1-y_m^{r_1},z_2=y_2-y_m^{r_2},\ldots,z_{m-1}=y_{m-1}-y_m^{r_{m-1}}$$
>将其展开后, 每个 $f$ 中的每一项都会产生一个常数乘以 $u$ 的某个幂的单项. 通过选择 $r_i$ 使得
>$$0\ll r_1\ll r_2\ll\cdots\ll r_{m-1}$$
>我们可以确保出现的 $y_m$ 的幂都不同, 特别地存在一个主导项 $y^N_m$, 所有其他项在 $y_m$ 中的次数都更低, 使得我们可以提取出 $y_m$ 在 $z_1,\ldots,z_{m-1}$ 上的整关系.

#代数几何 

[[Noether模|Noether环]]是交换代数中非常重要的刻画有限性的工具. 在概形论中, 我们需要一个能够保证"几何性质不会太离谱"的约束条件. 他保证了我们挖掘子空间的时候最终一定会触底.

>[!def] Noether概形
>设 $X$ 是[[概形]], 若 $X$ 可以被一族 $\Spec  A_i$ 覆盖, 其中每个 $A_i$ 都是[[Noether模|Noether环]], 则称 $X$ 为一个**局部Noether概形** (locally Notherian). 此外, 若 $X$ 满足 $X$ 是[[拟紧致]]的, 则称 $X$ 为一个**Noether概形** (Notherian scheme).

注意Noether概形的全局截面不一定是Noether环.

>[!thm] 定理1
>局部Noether性是[[仿射局部性质]].

>[!pf]
>若 $\Spec  A\hookrightarrow X$ 具有局部Noether性, 那么对任意 $f\in A$, $\Spec A_f\hookrightarrow X$ 也具有局部Noether性, 这是因为[[局部化|此页面定理7]].
>若 $(f_1,\ldots,f_n)=A$, 且对所有 $i$, $\Spec A_{f_i}\hookrightarrow X$ 都是局部Noether的, 则 $\Spec  A$ 也是局部Noether的, 这是因为[[局部化|此页面定理7]].
 
>[!thm] 定理2
>局部Noether概形是[[拟分离]]的.

>[!pf]
>设 $X$ 是局部Noether概形, 并且 $\Spec  A_i$ 是一族仿射开覆盖, 并且 $A_i$ 是Noether环. 对于任意两个仿射开子集 $U,V$, 我们要证明 $U\cap V$ 可以表示成有限个仿射开子集的并集. 由于 $X$ 拥有仿射开子集构成的基, 不妨设
>$$U\cap V=\bigcup_{\alpha\in I}{W_\alpha}$$
>其中每个 $W_\alpha$ 都是仿射开子集. 由于局部Noether是[[仿射局部性质]], 由[[仿射交流引理]], $X$ 的每个仿射开集都是局部Noether概形. 于是每个 $W_\alpha$ 都可以被一族 $\Spec  A_{\alpha,j}$ 覆盖, 其中每个 $A_{\alpha,j}$ 都是Noether环. 由于 $W_\alpha$ 是拟紧致的, 从而存在有限子覆盖 $\Spec  A_{\alpha,j_1},\ldots,\Spec  A_{\alpha,j_{n_\alpha}}$. 从而$$U\cap V=\bigcup_{\alpha\in I}{W_\alpha}=\bigcup_{\alpha\in I}\bigcup_{k=1}^{n_\alpha}{\Spec  A_{\alpha,j_k}}$$
>由于 $U\cap V$ 是拟紧致的, 从而存在有限子覆盖 $\Spec  A_{\alpha_1,j_{k1}},\ldots,\Spec  A_{\alpha_m,j_{k_m}}$. 从而$$U\cap V=\bigcup_{s=1}^m{\Spec  A_{\alpha_s,j_{k_s}}}$$
>证毕.

下面的两个定理是Noether概形的一个重要性质:

>[!thm] 定理3
>Noether概形必然是[[Noether空间]].

>[!pf]
>显然当 $A$ 是Noether环时, $\Spec  A$ 是Noether空间. 回到 $X$, 已知
>$$X=\bigcup_{i=1}^n{U_i}$$
>其中每个 $U_i$ 都是Noether空间, 假设 $X$ 中的闭集降链
>$$Z_1\supset Z_2\supset\cdots$$
>为了证明其满足降链条件, 对于每个 $i$, 序列 $Z_1\cap U_i\supset Z_2\cap U_i\supset\cdots$ 是 $U_i$ 中的闭集降链. 因为 $U_i$ 是Noether空间, 这个序列必然趋于稳定. 由于只有有限个 $i$, 可以取稳定步数最大值. 这就证明了命题.

>[!thm] 定理4
>设 $X$ 是Noether概形, 则 $X$ 具有有限个连通分量 $X=\sqcup_{i=1}^nX_i$, 且每个分量都是有限个[[可约概形|不可约闭集]]的并.

>[!pf]
>后者是显然的, 由[[Noether空间|此页面定理2]]即得. 现在我们知道 $X=\cup_jV_j$, 其中 $V_j$ 是不可约闭集. 连通分量是极大的不可约子集, 而每个 $V_j$ 必然是连通的. 因此每个 $V_j$ 必然完全包含在 $X$ 的某个连通分量内, 从而 $X$ 的连通分量的个数不超过 $V_j$ 的个数, 从而 $X$ 的连通分量是有限的. 证毕.


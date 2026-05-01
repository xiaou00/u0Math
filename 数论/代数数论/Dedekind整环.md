#交换代数 

>[!def] Dedekind整环
>一个[[整环]] $A$ 若满足:
>1. $A$ 是[[Noether模|Noether环]];
>2. $A$ 的[[Krull维数]]为 $1$;
>3. $A$ 在 $\mathrm{K}(A)$ 中是[[整元素|整闭]]的.
>
>则称 $A$ 是一个**Dedekind整环**(Dedekind domain).

>[!thm] 定理1 (Dedekind整环的局部性质)
>一个整环 $A$ 是Dedekind整环当且仅当 $A$ 是Noether的, 且在任何非零素理想 $\mathfrak p$ 上的局部化 $A_{\mathfrak p}$ 是一个[[离散赋值环]].

>[!pf]
>我们考虑 (VII) 中的离散赋值环定义.
>
>由于 $A$ 是Dedekind整环, 显然是Noether的且整闭的, 因此 $A_{\mathfrak p}$ 是Noether且整闭的 (这两个性质被局部化保持). 并且 $A_\mathfrak p$ 的极大理想是 $\mathfrak pA_{\mathfrak p}$, 局部环 $\mathfrak p$ 中的素理想与原环中包含 $\mathfrak p$ 的素理想一一对应, 由于 $A$ 的Krull维数为 $1$, 包含 $\mathfrak p$ 的素理想只有 $\mathfrak p$ 和 $(0)$ 两个, 从而 $A_{\mathfrak p}$ 的Krull维数为 $1$. 因此 $A_{\mathfrak p}$ 满足离散赋值环定义(VII)中的条件, 从而是一个离散赋值环.
>
>反之, 设 $A$ 是Noether的整环, 且在任何非零素理想 $\mathfrak p$ 上的局部化 $A_{\mathfrak p}$ 是一个离散赋值环. 假设 $A$ 的维数大于 $1$, 这意味着在 $A$ 中存在一条长度至少为 $2$ 的素理想严格升链
>$$(0)\subsetneq\mathfrak p_1\subsetneq\mathfrak p_2$$
>我们对较大的素理想 $\mathfrak p_2$ 进行局部化, 得到 $A_{\mathfrak p_2}$, 那么根据已知条件, $A_{\mathfrak p_2}$ 是一个DVR, 因此其Krull维数为 $1$, 但是由于局部化素理想的对应关系, 在 $A_{\mathfrak p_2}$ 中会产生严格的升链
>$$(0)\subsetneq\mathfrak p_1A_{\mathfrak p_2}\subsetneq\mathfrak p_2A_{\mathfrak p_2}$$
>意味着 $A_{\mathfrak p_2}$ 包含至少两个不同的非零素理想, 维数至少为 $2$, 矛盾从而假设不成立.
>
>设 $K$ 是 $A$ 的分式域, 由于一个整环可以表示为其在所有极大理想处局部化的交集, 即
>$$R=\bigcap_{\mathfrak m\,\text{是极大理想}}R_{\mathfrak m}$$
>根据已知条件, 对于每个极大理想 $\mathfrak m$, $A_\mathfrak m$ 都是DVR, 由于DVR是整闭的, 且任意多个整闭整环的交整闭, 我们证明了 $A$ 整闭, 至此所有条件均满足.

我们可以给出一种Dedekind整环的相对定义:

>[!def] 域上的Dedekind整环
>设 $k$ 是[[域]], 若 $A$ 是有限生成的 $k$-代数, Krull维数为 $1$ 且整闭, 则称之为域 $k$ 上的一个**Dedekind整环**.


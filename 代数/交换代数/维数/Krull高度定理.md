#代数几何 

Krull高度定理就像是[[Krull主理想定理]]的反复应用后的结论.

>[!thm] Krull高度定理, 几何版本 (Krull's Height Theorem, Geometric Version)
>设 $X=\Spec A$, 其中 $A$ 是[[Noether模|Noether环]], 取 $f_1,\ldots,f_r\in A$, $Z$ 是 $V(f_1,\ldots,f_r)$ 的不可约分量, 则 $Z$ 的余维数至少为 $r$.

>[!thm] Krull高度定理, 代数版本 (Krull's Height Theorem, Algebraic Version)
>设 $A$ 是Noether环, $I=(f_1,\ldots,f_n)$, 设 $\mf p$ 是包含 $I$ 的一个极小素理想, 则 $\mathrm{ht}(I)\le n$.

我们先来证明一个引理:

>[!lem] 引理1
>设 $\mf p_0\subsetneq\mf p_1\subsetneq\cdots\subsetneq\mf p_n$ 是Noether环 $A$ 中的一个严格的素理想链, 且 $f\in\mf p_n\setminus\mf p_0$, 则存在一个严格的理想链
>$$\mf p_0=\mf q_0\subsetneq\mf q_1\subsetneq\cdots\subsetneq\mf q_{n-1}\subsetneq\mf q_n=\mf p_n$$
>且 $f\in\mf q_1\setminus\mf q_0$.

>[!pf]
>我们的目标是下述构造:
>```tikz
\usepackage{tikz-cd}
\usepackage{amsfonts}
\begin{document}
\large
\begin{tikzcd}[cramped]
{\mathfrak p_0} && {\mathfrak p_1} && \cdots && {\mathfrak p_{n-2}} && {\mathfrak p_{n-1}} && {\mathfrak p_n} \\
\\
f && {\mathfrak q_1} && \cdots && {\mathfrak q_{n-2}} && {\mathfrak q_{n-1}} && {\mathfrak q_n}
\arrow["\ne"{description}, hook, from=1-1, to=1-3]
\arrow["\ne"{description}, hook, from=1-1, to=3-3]
\arrow["\ne"{description}, hook, from=1-3, to=1-5]
\arrow["\ne"{description}, hook, from=1-3, to=3-5]
\arrow["\ne"{description}, hook, from=1-5, to=1-7]
\arrow["\ne"{description}, hook, from=1-5, to=3-7]
\arrow["\ne"{description}, hook, from=1-7, to=1-9]
\arrow["\ne"{description}, hook, from=1-7, to=3-9]
\arrow["\ne"{description}, hook, from=1-9, to=1-11]
\arrow["\ne"{description}, hook, from=1-9, to=3-11]
\arrow[equal, from=1-11, to=3-11]
\arrow["\in"{marking, allow upside down}, draw=none, from=3-1, to=3-3]
\arrow["\ne"{description}, hook, from=3-3, to=3-5]
\arrow["\ne"{description}, hook, from=3-5, to=3-7]
\arrow["\ne"{description}, hook, from=3-7, to=3-9]
\arrow["\ne"{description}, hook, from=3-9, to=3-11]
\end{tikzcd}
\end{document}
>```
>假设有 $\mf p_{j-2}\subsetneq\mf p_{j-1}\subsetneq\mf p_j$, 且 $f\in\mf p_j\setminus\mf p_{j-2}$, 我们寻找一个包含 $f$ 的素理想 $\mf q_{j-1}$ 满足 $\mf p_{j-2}\subsetneq\mf q_{j-1}\subsetneq\mf p_j$. 取 $\mf q_{j-1}$ 为包含 $(f,\mf p_{j-2})$ 且在包含于 $\mf p_j$ 的那些素理想中极小的素理想. 由[[Krull主理想定理]], $\mf q_{j-1}$ 在 $A/\mf p_{j-2}$ 中的余维数为 $1$, 而 $\mf p_j$ 的余维数至少为 $2$, 因此 $\mf q_{j-1}\subsetneq\mf p_j$.

>[!pf] Pf. (原定理)
>我们先考虑同态 $A\to A_\mf p$, 他诱导了一个同态 $\Spec A_\mf p\to\Spec A$. 这相当于我们将讨论空间缩小到了一个Noether局部环 $(A_\mf p,\mf m)$ 中, 而此处的极大理想 $\mf m=\mf pA_\mf p$. 因为 $\mf p$ 在 $A$ 中是包含 $(f_1,\ldots,f_r)$ 的极小素理想, 所以在局部环 $A_\mf p$ 中, $\mf m$ 是包含 $(f_1,\ldots,f_r)$ 的唯一素理想, 因此问题被完美地归化成一个局部问题:
>
>设 $(A,\mf m)$ 是Noether局部环, 极大理想 $\mf m$ 对理想 $(f_1,\ldots,f_r)$ 极小, 假设存在一条长度为 $n$ 的严格素理想链
>$$\mf p_0\subsetneq\mf p_1\subsetneq\cdots\subsetneq\mf p_n=\mf m$$
>我们需要证明 $n\le r$. 接下来只需对 $r$ 进行归纳, 当 $r=1$ 的时候由[[Krull主理想定理]]得证. 递推时, 我们处理两种情况:
>
>1. 若 $f_r\in\mf p_0$, 这意味着包含链底端的极小闭子集 $V(\mf p_0)$ 落在 $V(f_r)$ 内部. 此时取商同态 $A\to A/\mf p_0$, 其中, 极大理想 $\mf m$ 变为 $r-1$ 个元素 $(f_1,\ldots,f_{r-1})$ 的极小素理想. 商环中保留了长度 $n$ 的素理想链. 由归纳假设, 既然它对 $r-1$ 个元素极小, 则 $n\le r-1<r$.
>2. 若 $f_r\notin\mf p_0$, 由引理, 我们可以对原有的理想链重新路由, 构造出起点终点长度都相同的新链$$\mf p_0=\mf q_0\subsetneq\mf q_1\subsetneq\cdots\subsetneq\mf q_{n-1}\subsetneq\mf q_n=\mf p_n$$并且这个链满足 $f_r\in\mf q_1$. 用类似 1. 中的方法即可.

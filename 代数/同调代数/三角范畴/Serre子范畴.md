#代数 

>[!def] Serre子范畴
>[[Abel范畴]] $\mathfrak A$ 的全[[子范畴]] $\mathfrak T$ 若满足:
>1. $0\in\mathrm{ob}(\mathfrak T)$.
>2. 对于 $\mathfrak A$ 中的任意短正合列 $0\to X'\to X\to X''\to 0$, 有 $X\in\mathrm{ob}(\mathfrak T)\iff X',X''\in\mathrm{ob}(\mathfrak T)$.
>
>则称 $\mathfrak T$ 为 $\mathfrak A$ 的**Serre子范畴**(Serre subcategory). 若将后一条改为对于 $\mathfrak A$ 的任意正合列
>$$W\to X'\to X\to X''\to Y$$
>有 $W,X',X'',Y\in\mathrm{ob}(\mathfrak T)\implies X\in\mathrm{ob}(\mathfrak T)$, 则称 $\mathfrak T$ 是 $\mathfrak A$ 的**弱Serre子范畴**.

>[!thm] 定理1
>弱Serre子范畴一定是[[Abel子范畴]].

>[!pf]
>第一条显然满足, 并且只须代入以下正合列
>$$\begin{matrix}
0\to X\to X\oplus Y\to Y\to 0\\
0\to 0\to\ker f\to X\xto fY\\
X\xto fY\to\coker f\to 0\to 0
\end{matrix}$$
>结合[[Abel子范畴|此页面定理1]]即证.

>[!def] 函子的核
>设 $F:\mathfrak A\to\mathfrak B$ 是Abel范畴之间的正合函子, 全体满足 $FX=0$ 的 $X$ 构成 $\mathfrak A$ 的Serre子范畴, 记作 $\ker F$.



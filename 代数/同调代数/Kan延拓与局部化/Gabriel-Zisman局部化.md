#代数 

>[!def] Gabriel-Zisman局部化
>设 $\mathfrak C$ 为[[范畴]], $S$ 是 $\mathrm{Mor}(\mathfrak C)$ 的子集, 它包含所有恒等态射, 并且对态射合成封闭. $\mathfrak C$ 对 $S$ 的**Gabriel-Zisman局部化**(localization) 是指一个范畴 $\mathfrak C[S^{-1}]$, 这个范畴容许是"大"范畴. 连同函子 $Q:\mathfrak C\to\mathfrak C[S^{-1}]$ 满足:
>1. 对所有 $s\in S$, 其像 $Q(s)$ 是 $\mathfrak C[S^{-1}]$ 中的同构.
>2. 对所有范畴 $\mathfrak D$, 和函子 $F:\mathfrak C\to\mathfrak D$, 若 $S$ 中的态射皆被 $F$ 映为同构, 则存在唯一的函子 $F[S^{-1}]:\mathfrak C[S^{-1}]\to\mathfrak D$ 使得 $F=F[S^{-1}]Q$.

简单来说, 就是使得态射集 $S$ 全可逆的满足泛性质的那个范畴 (以及对应的函子).

>[!thm] 定理1
>若 $(\mathfrak C[S^{-1}],Q)$ 和 $(\mathfrak C[S^{-1}]',Q')$ 都是 $\mathfrak C$ 对 $S$ 的局部化, 则存在唯一一对函子
>$$G:\mathfrak C[S^{-1}]\leftrightarrows\mathfrak C[S^{-1}]':G'$$
>使得 $GQ=Q'$ 且 $G'Q'=Q$. 此外, $G$ 和 $G'$ 是互为等价的. 即 $G'G=\mathbb 1_{\mathfrak C[S^{-1}]}$, $GG'=\mathbb 1_{\mathfrak C[S^{-1}]'}$.

>[!pf]
>由于 $Q'$ 映 $S$ 为通过, 泛性质给出唯一的 $G$ 使得 $GQ=Q'$, 同理存在唯一的 $G'$ 使得 $G'Q'=Q$, 由于 $G'GQ=Q$, 在泛性质中取 $\mathfrak D=\mathfrak C[S^{-1}]$ 和 $F=Q$ 可见 $G'G=\mathbb 1_{\mathfrak C[S^{-1}]}$, 同理可得 $GG'=\mathbb 1_{\mathfrak C[S^{-1}]'}$.

这表明, 局部化在范畴同构的意义下是唯一的.

>[!thm] 定理2
>设局部化 $(\mathfrak C[S^{-1}],Q)$ 存在, 记录 $S^{\mathrm{op}}$ 为 $S$ 在 $\mathrm{Mor}(\mathfrak C^{\mathrm{op}})$ 中对应的像, 则存在与 $Q$ 相容的范畴等价
>$$\mathfrak C[S^{-1}]^{\mathrm{op}}\leftrightarrows\mathfrak C^{\mathrm{op}}[(S^{\mathrm{op}})^{-1}]$$

>[!pf]
>基于局部化的唯一性, 只须对定义中的全部范畴以及函子取对偶即可.

现在我们感兴趣的是局部化的存在性, 以及其构造问题. 对于一般的 $\mathfrak C$ 和 $S$, 可以向 $\mathfrak C$ 添加逆来构造 $\mathfrak C[S^{-1}]$, 具体的可以构造为 $\mathrm{ob}(\mathfrak C[S^{-1}])=\mathrm{ob}(\mathfrak C)$. 而起态射可以形式地表为
$$\cdots bt^{-1}as^{-1}\cdots=\begin{pmatrix}
\cdots&&&&Y&&&&W&&&&\cdots\\
&\searrow&&\overset{s}\swarrow&&\overset{a}\searrow&&\overset{t}\swarrow&&\overset{b}\searrow&&\swarrow\\
&&X&&&&Z&&&&U
\end{pmatrix}$$
其中 $a,b,\ldots\in\mathrm{Mor}(\mathfrak C)$ 而 $s,t,\ldots\in S$. 按照显然的方式定义运算和 $Q$, 同时商去下面生成的等价关系
$$s^{-1}t^{-1}=(ts)^{-1}\quad ss^{-1}=\mathbb 1\quad s^{-1}s=\mathbb 1$$

>[!thm] 定理3
>局部化函子 $Q:\mathfrak C\to\mathfrak C[S^{-1}]$ 必然是[[本质满函子]], 且对任意范畴 $\mathfrak D$ 和函子 $A,B:\mathfrak C[S^{-1}]\to\mathfrak D$, 自明的映射
>$$\Hom_{\mathfrak D^{\mathfrak C[S^{-1}]}}(A,B)\to\Hom_{\mathfrak D^{\mathfrak C}}(AQ,BQ)$$
>是双射, 换言之 $Q^*:\mathfrak D^{\mathfrak C[S^{-1}]}\to\mathfrak D^{\mathfrak C}$ 是[[全函子|全]][[忠实函子]].




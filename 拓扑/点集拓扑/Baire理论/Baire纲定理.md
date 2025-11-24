#点集拓扑 

>[!theorem] Baire纲定理 (Baire category theorem, BCT)
>若$X$是[[紧致性|紧致]]的[[Hausdorff空间]], 或是[[完备空间|完备]]的[[度量空间]], 则$X$是一个[[Baire空间]].

>[!proof]
>给定$X$的闭集的有一个可数族$\set{A_n}$, 其中每个$A_n$都有空内部. 我们证明其并集$\bigcup{A_n}$在$X$中也有空内部, 为此任给$X$的非空开集$U_0$, 我们必须找出一点$x$, 它属于$U_0$却不属于任何一个$A_n$.
>
>考虑集合$A_1$, 由假设, $A_1$不包含$U_0$<span style="color:rgb(128,128,128)">(否则与空内部矛盾)</span>, 从而可以选择$y$,它属于$U_0$却不属于$A_1$, 由于$A_1$是闭集, $X$是正则的<span style="color:rgb(128,128,128)">(T2+紧致推出正规, 度量空间蕴含正规, T4⇒T3)</span>, 所以可以选择$y$的一个邻域$U_1$, 使得$$\begin{aligned}
\clos{U_1}\cap A_1&=\O\\
\clos{U_1}\subset U_0&
\end{aligned}$$
>若$X$是度量空间, 可以把$U_1$选的足够小使得$\diam {U_1}<1$.
>
>一般地, 给定非空开集$U_{n-1}$, 可以选取$U_{n-1}$的一个点, 使它不在闭集$A_n$中, 然后选取这个点的一个邻域$U_n$使得$$\begin{aligned}
&\clos{U_n}\cap A_n=\O\\
&\clos{U_n}\subset U_{n-1}\\
&\diam{U_n}<1/n,\quad\text{若}X\text{是度量空间}
\end{aligned}$$
>我们断言$\bigcap{U_n}$非空, 这个结论能立即推出原定理,  因为若$x\in \bigcap{U_n}$, 那么$x\in U_0$<span style="color:rgb(128,128,128)">(套序列)</span>, 由于对每个$n$, $\clos{U_n}$与$A_n$无交, 所以$x\notin A_n$.
>
>分类讨论:
>I. 若$X$是精致的Hausdorff空间, 考虑$X$的非空子集的套序列$\clos{U_1}\supset\clos{U_2}\supset\cdots$. 族$\set{\clos{U_n}}$满足有限交性质, 由$X$的紧致性$\bigcap{\clos{U_n}}$必然非空.
>II. 若$X$是完备度量空间, 由[[闭区间套定理]]即可推出$\bigcap{\clos{U_n}}$非空.






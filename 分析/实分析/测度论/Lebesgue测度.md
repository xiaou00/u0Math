#分析 

本节将通过一系列构造, 最终引出$\R$和$\R^d$上Lebesgue测度这个目标定义.

我们先来讨论[[实数|实数系]]上的情况. 首先我们对所有区间, 例如$(0,1),[0,1],[0,1)$都统一定义一个长度, 设$I\subset\R$是一个区间, 则定义体积(长度)为
$$\operatorname{len}I=\diam I=\sup I-\inf I$$
 于是我们可以定义$\R$上的一个[[外测度]]:

>[!definition] Lebesgue外测度
>我们定义$\R$的一个子集$S$的**Lebesgue外测度**为使用可数个区间覆盖该子集的区间长度的最小值, 即
>$$m^*(S):=\inf\set{\,\sum_{j\in J}{\operatorname{len}{I_j}}\,\Big|\,S\subset\bigcup_{j\in J}{I_j}\,}$$
>其中指标集$J$为可数集. 如下图所示:
>```tikz
\usepackage{pgfplots}
\begin{document}
\begin{tikzpicture}[domain=-1:1,scale=1]
\draw[->] (-3,0) -- (1,0) node[right] {};
\filldraw (0,0) circle (1pt);
\draw[line width=2pt] (-2,0)--(-1,0);
\node at (0,0.5) {};
\node at (0,-0.5) {};
\draw[thick,red] (-0.1,0.2) to[bend right=30] (-0.1,-0.2);
\draw[thick,red] (0.1,0.2) to[bend right=-30] (0.1,-0.2) node[above right] {$I_2$};
\draw[thick,red] (-2.1,0.2) to[bend right=30] (-2.1,-0.2);
\draw[thick,red] (-0.9,0.2) to[bend right=-30] (-0.9,-0.2) node[above right] {$I_1$};
\end{tikzpicture}
\end{document}
>```
>容易验证其满足外测度的条件.

但目前, 我们仅仅是构造了满足**次可数可加性**的外测度, 我们要使得测度定义是合理的, 必须满足完整的**可数可加性**, 为此我们需要去掉一些病态的集合, 我们称下面给出的条件为**Carathéodory条件**:

>[!proposition] Carathéodory条件
>对于$E\subset\R$, 若
>$$\forall A\in\R,m^*(A)=m^*(A\cap E)+m^*(A\setminus E)$$
>即对任意集合$A$, 其测度等于其在$E$之内的部分与$E$之外的部分之和.

由[[Carathéodory定理]]成立, 我们可以定义:

>[!definition] Lebesgue测度
>令$\mc M$为$\R$中全体满足Carathéodory条件的子集构成的族, $m=m^*|_\mc M$是限制映射, 则$(\R,\mc M,m)$构成一个[[测度空间]], 称测度$m$为**Lebesgue测度**(Lebesgue measure), 当对该测度积分时, 我们常常可以省略$\d m$, 即
>$$\int_X{f\,\d m}\quad\text{可简写作}\quad\int_X{f}$$
>显然, 我们定义的Lebesgue测度$m$还满足次可数可加性. $\R^d$的Lebesgue测度空间$(\R^d,\mc M_d,m_d)$由$\R$的积空间定义.

显然, 由定义, $\R$的零测集都是Lebesgue可测的.

>[!theorem] 定理1 (平移不变性)
>上述定义的测度$m$满足平移不变性.

>[!proof]
>只需证明Lebesgue外测度平移不变. 易证区间平移后仍然是等长的区间, 且平移后的全体区间依然覆盖平移后的集合, 因此平移后的测度不会大于原本的测度, 即
>$$m^*(E+k)\le m^*(E)$$
>只需再次套用一遍上式,
>$$m^*(E-k'+k')\le m^*(E-k')\implies m^*(E)\le m^*(E-k')$$
>由于$k$是任意的, 只需任选$k'=-k$即可, 从而结论成立.

>[!theorem] 定理2 (和Borel代数的关系)
>$\R$的每个[[Borel代数|Borel集]]都是Lebesgue可测的, 即$\mc B(\R)\subset \mc M$.

>[!proof]
>对于每个$a\in\R$有$(-\infty,a]=\complement(a,+\infty)$, 从而可测, 每个$(-\infty,b)$可以表示为
>$$(-\infty, b)=\bigcup_{n=1}^\infty{(-\infty,b-1 /n]}$$
>从而$(-\infty,b)$, 可测, 其交$(a,b)$可测, 由于$\R$的每个开集都是区间生成的,  且每个开集可以可数地表示为区间的并([[可分集]]), 证毕.


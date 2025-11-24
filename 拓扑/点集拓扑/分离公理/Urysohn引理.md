#点集拓扑 #分离公理 

Urysohn引理是一个非常至关重要的引理, 他是证明一些重要结论, 例如[[Urysohn度量化定理]], [[Tietze扩张定理]]以及一个关于流形嵌入定理的重要工具. 而这个引理的证明思想也非常的新颖, 下面是引理的陈述:

>[!lemma] Urysohn引理
>设$X$为[[正规空间]], $A,B$是$X$中两个无交的闭集, $[a,b]$是实直线上的一个闭区间, 则存在一个连续映射
>$$f:X\to[a,b]$$
>使得$x\in A\implies f(x)=a$, $y\in B\implies f(y)=b$. 即, 正规空间上的任何两个闭区间都是[[分离公理|函数可分离]]的.

>[!proof]
>事实上, 只需要证明$[0,1]$的情况即可, 因为满足$a<b$的$\R$上闭区间$[a,b]$是两两同胚的.
>
>---
>I. 先设$P$是区间$[0,1]$中所有有理数组成的集合<span style="color:rgb(128,128,128)">(也可以是任何可数稠密子集)</span>, 即$P=[0,1]\cap\Q$. 我们可以对于每一个$p\in P$, 选取$X$中的开集$U_p$, 使得当$p<q$时都有
>$$\clos{U_p}\subset U_q$$
>如此, 包含关系便是这些集合$U_p$之间的一个全序关系. 显然, 这个全序与下标在实数轴上的序关系相同<span style="color:rgb(128,128,128)">(保序)</span>. 由于$P$可数, 我们应用[[归纳定义原理]]来定义这些$U_p$, 以某种方式将$P$中元素排列成一个无穷序列, 方便起见, 不妨设$1$和$0$就是序列最前面的两个元素.
>
>※我们定义集合$U_p$如下: 首先令$U_1=X-B$. 显然$U_1$是开集, 且包含闭集$A$. 由正规性的等价命题([[正规空间|此页面定理1]]), 我们可以选取$X$的开集$U_0$使得$A\subset U_0$且$\clos{U_0}\subset U_1$.
>接下来考虑进行归纳定义, 令$P_n$表示有理数序列中前$n$项构成的集合, 假设对于所有属于$P_n$的有理数$p$, 开集$U_p$已经定义完毕, 并且满足条件
>$$p<q\implies\clos{U_p}\subset U_q\tag{1}$$
>用$r$表示有理数序列的第$n+1$项, 我们来定义$U_r$:
>考虑集合$P_{n+1}=P_n\cup\set{r}$, 他是区间$[0,1]$的一个有限子集, 并且它继承了实数轴上的序关系$<$给出的全序. **在有限的全序集中, 每一个除了最小及最大元的元素, 都有一个紧接前元和紧接后元**<span style="color:rgb(128,128,128)">(反证+归纳容易证明这个结论)</span>. 而在此处, $P$的最小元是$0$, 最大元是$1$, 从而一定能在$P_{n+1}$中选取$r$的紧接前元$p$以及紧接后元$q$. 而集合$U_p,U_q$已经定义, 由归纳假设, 有$\clos{U_p}\subset U_q$, 再次应用$X$的正规性, 总能找到$X$的一个开集$U_r$, 使得$\clos{U_p}\subset U_r$且$\clos{U_r}\subset U_q$.
>
>我们断言, 对于$P_{n+1}$中的每一对元素, (1)都成立: 若这两个元素都属于$P_n$, 由归纳假设立即得出$(1)$成立. 若它们其中有一个是$r$, 另一个设为$s\in P_n$, 那么在$s\le p$的情况下有$\clos{U_s}\subset\clos{U_p}\subset U_r$, 在$s\ge q$的情况下有$\clos{U_r}\subset U_q\subset U_s$. 于是对于$P_{n+1}$的每一对元素, (1)成立. 从而由归纳定义原理, 对$P_{n+1}$的任意元素$p$, $U_p$都有定义.
>
>>[!hint] 部分总结
>>截至目前, 我们所做的是将$[0,1]$中的有理数排成了一列, 并将其对应到$X$中一系列满足某种顺序的开集, 例如对于序列排序
>>$$P=\set{1,0,\frac12,\frac13,\frac23,\frac14,\frac34,\frac15,\frac25,\frac35,\ldots}$$
>>在选定了$U_0,U_1$之后, $U_\frac12$便是满足(1)的介于$U_0$和$U_1$之间的开集, 我们按照这种步骤不断地"插入"全体的有理数, 最终归纳使得它对全体有理数有定义.
>
>---
>II. 现在对于$[0,1]$中的全体有理数$p$, 都定义了$U_p$, 我们尝试将上述定义扩充到全体有理数$\Q$中, 对于$p\in\Q$, 我们规定:$$\begin{aligned}&U_p=\O\quad p<0\\ &U_p=X\quad p>1\end{aligned}$$
>可以验证(1)对于新定义的$\set{U_p}_{p\in\Q}$依然成立.
>
>---
>III. 给定$X$中一点$x$, 我们定义$\Q_x$为全体满足$x\in U_p$的有理数$p$的集合, 即
>$$\Q_x=\set{p\in\Q\mid x\in U_p}$$
>因为对于$p<0$, 没有点$x$属于$U_p$, 所以$\Q_x$不包含小于$0$的数. 又因为对于$p>1$, 每一个$x$都在$U_p$中, 从而$\Q_x$包含大于$1$的每一个有理数. **因此$\Q_x$是有下界的**, 并且其下确界是区间$[0,1]$中的点, 于是我们构造:
>$$f(x)=\inf\Q_x=\inf\set{p\in\Q\mid x\in U_p}$$
>
>---
>IV. 最终, 我们来证明$f$是所求的函数:
>若$x\in A$, 那么对于每个$p\ge 0$都有$x\in U_p$, 从而$\Q_x$等同于非负有理数集, $f(x)=\inf\Q_x=0$. 类似地, 若$x\in B$, 没有$p\le 1$使得$x\in U_p$, 从而$\Q_x$等同于所有大于$1$的有理数, 故$f(x)=1$.
>
>证明最后的难点是证明$f$的连续性, 在此之前, 我们先证明两个引理:
>L1. $x\in\clos{U_r}\implies f(x)\le r$.
>L2. $x\notin\clos{U_r}\implies f(x)\ge r$.
>
>L1: 注意到如果$x\in\clos{U_r}$, 那么对任何$s>r$, $x\in U_s$. 从而$\Q_x$包含所有大于$r$的有理数, 因此$$f(x)=\inf\Q_x\le r$$
>L2: 注意到如果$x\notin\clos{U_r}$, 则对于任何$s<r$, $x\notin U_s$. 从而$\Q_x$包含不小于$r$的有理数, 因此$$f(x)=\inf\Q_x\ge r$$
>最后我们来证明$f$连续. 给定$X$的一个点$x_0$, 任取$\R$中包含$f(x_0)$的开区间$(c,d)$, 我们取有理数$p,q$使得$c<p<f(x_0)<q<d$, 并断言开集$U=U_q-\clos{U_p}$就是使得$f(U)\subset(c,d)$的$x_0$的邻域, 如下图所示
>```tikz
\usepackage{pgfplots}
\begin{document}
\begin{tikzpicture}[domain=-3:3,scale=1]
\draw (0,0) circle (2) node[above] at (0,1) {$U_q$};
\draw (0,0) circle (1) node[below] {$\overline{U_p}$};
\filldraw (1.5,0) circle (2pt) node[below] {$x_0$};
\draw[->, line width=2pt] (2.5,0)--(3.5,0) node[above,pos=0.5] {$f$};
\draw [] (4,0)--(8,0) node[above,pos=0.5] {};
\filldraw (6,0) circle (2pt) node[below] {$f(x_0)$};
\filldraw (5,0) circle (2pt) node[below] {$p$};
\filldraw (7,0) circle (2pt) node[below] {$q$};
\draw (4.5,0) circle (2pt) node[below] {$c$};
\draw (7.5,0) circle (2pt) node[below] {$d$};
\end{tikzpicture}
\end{document}
>```
>首先注意到$x_0\in U$, 这是因为由L2以及$f(x_0)<q$立即得出$x_0\in U_q$, 同时由L1及$f(x_0)>p$可见$x_0\notin\clos{U_p}$.
>我们证明$f(U)\subset(c,d)$. 令$x\in U$, 此时有$x\in U_q\subset\clos{U_q}$, 由L1可见$f(x)\le q$. 又由于$x\notin\clos{U_p}$, 从而一定$x\notin U_p$, 由L2有$f(x)\ge p$, 从而$f(x)\in[p,q]\subset(c,d)$, 结合[[连续映射|此页面定理1]], 立即得到$f$是连续的, 故$f$就是所求的函数, 证毕.


#点集拓扑 

我们知道, 有限个[[紧致性|紧空间]]的积还是紧致的, 并且我们已经给出了对应的证明.

事实上, 这个结论对应任意积也成立, 也就是本节的Tychonoff定理. **但是**Tychonoff定理的证明依赖于[[选择公理]], 所以在ZFC中, 我们可以直接断言Tychonoff定理成立.

##### 思路

在证明二元积$X\times Y$的时候, 我们借助了[[紧致性|管状引理]], 通过用其中有限个元素覆盖薄片$x\times Y$, 从而构造出了$X\times Y$的有限覆盖. 但对于任意积, 我们无法保证这一结果, 因为乘积本身过程中又"叠加"了一层无限, 我们的做法是, 转而考虑紧致性的闭集形式, 然后使用[[Zorn引理]]证明我们的结论.

##### 先从最简开始

考虑两个紧致空间$X=X_1\times X_2$的积, 假定$\ms{A}$是$X$中具有[[有限交性质]]的闭子集族, 考虑投射$\pi_1:X\to X_1$, 不难发现, $X_1$的子集族$\set{\,\pi_1(A)\mid A\in\ms{A}\,}$也具有有限交性质, 从而$\set{\,\clos{\pi_1(A)}\mid A\in\ms{A}\,}$也具备.  同时$X_1$的紧致性也保证了$\bigcap\set{\,\clos{\pi_1(A)}\mid A\in\ms{A}\,}\ne\O$, 我们自然可以在这个交中选取一点$x_1$. 类似地, 我们也可以在$\bigcap\set{\,\clos{\pi_2(A)}\mid A\in\ms{A}\,}$中选取$x_2$, 我们希望$(x_1,x_2)\in\bigcap_{A\in\ms{A}}{A}$成立, **然而事实真的如此吗**? 考虑下图中的情况:

```tikz
\begin{document}

\begin{tikzpicture}

    \draw[thick] (0,0) -- (6,0) -- (6,6) -- (0,6) -- cycle;

    \filldraw (2,2) circle (2pt) node[above right] {$p$};

    \filldraw (3,4) circle (2pt) node[below left] {$q$};

    \filldraw (0,3) circle (2pt) node[left] {$x_2$};

    \filldraw (3,0) circle (2pt) node[above right] {$x_1$};

    \draw[rotate around={-26.57:(2.5,3)},thick] (2.5,3) ellipse (0.2 and 1.4);

    \draw[rotate around={-26.57:(2.5,3)},thick] (2.5,3) ellipse (0.5 and 1.7);

    \draw[rotate around={-26.57:(2.5,3)},thick] (2.5,3) ellipse (0.8 and 2);

    \draw[rotate around={-26.57:(2.5,3)},thick] (2.5,3) ellipse (1.1 and 2.3);

    \draw[thick, dashed] (2,0)--(2,2) node[pos=0, below] {$\frac13$};

    \draw[thick, dashed] (0,2)--(2,2) node[pos=0, left] {$\frac13$};

    \draw[thick, dashed] (3,0)--(3,4) node[pos=0, below] {$\frac12$};

    \draw[thick, dashed] (0,4)--(3,4) node[pos=0, left] {$\frac23$};

    \draw[thick, dashed] (0,3)--(3,3) node[pos=1,right,red] {$(x_1,x_2)$};

    \filldraw[red] (3,3) circle (2pt);

\end{tikzpicture}

\end{document}
```

>[!ex] 引例
>我们考虑以上情况, 其中$X_1=[0,1],X_2=[0,1]$. 不妨记$I=X_1\times X_2=[0,1]^2$, 我们考虑全体以$p=(\frac13,\frac13), q=(\frac12,\frac23)$为焦点的椭圆区域组成的族$\ms{A}$, 他显然具有有限交性质, 
>
>我们在$\bigcap\set{\,\clos{\pi_1(A)}\mid A\in\ms{A}\,}=[\frac13,\frac12]$中选取一点$x_1$, 不妨选取$x_1=\frac12$. 同理,
>我们在$\bigcap\set{\,\clos{\pi_2(A)}\mid A\in\ms{A}\,}=[\frac13,\frac23]$中选取一点$x_1$, 不妨选取$x_2=\frac12$.
>
>不幸的是, 诚如图上所展示的那样, $(x_1,x_2)=(\frac12,\frac12)$并不在$\ms{A}$的交集中.

##### 如何改进?

上面的证明漏洞归根结底是因为, 我们选取的点不够"恰当": 我们尝试取**扩大**集合族$\ms{A}$, 以此来制约选择, 不让我们能够选择到那些我们不想要的, 不符合要求的点, 例如, 还是在上例中, 我们将椭圆域族$\ms{A}$扩大至$\ms{D}$, 它的定义为以$p=(\frac13,\frac13)$为一个焦点, 另一个焦点在线段$pq$上的全体椭圆域组成的族, 即下图所示方法

```tikz
\begin{document}

\begin{tikzpicture}

    \draw[thick] (0,0) -- (6,0) -- (6,6) -- (0,6) -- cycle;

    \filldraw (2,2) circle (2pt) node[above right] {$p$};

    \filldraw (3,4) circle (2pt) node[below left] {$q$};

    \filldraw (3,0) circle (2pt) node[above right] {$x_1$};

    \draw[rotate around={-26.57:({9/4},{5/2})},thick, red] ({9/4},{5/2}) ellipse (0.3 and 0.8);

    \draw[rotate around={-26.57:({17/8},{9/4})},thick, red] ({17/8},{9/4}) ellipse (0.15 and 0.4);

    \draw[rotate around={-26.57:(2.5,3)},thick] (2.5,3) ellipse (0.5 and 1.7);

    \draw[rotate around={-26.57:(2.5,3)},thick] (2.5,3) ellipse (0.8 and 2);

    \draw[rotate around={-26.57:(2.5,3)},thick] (2.5,3) ellipse (1.1 and 2.3);

    \draw[thick, dashed] (2,0)--(2,2) node[pos=0, below] {$\frac13$};

    \draw[thick, dashed] (0,2)--(2,2) node[pos=0, left] {$\frac13$};

    \draw[thick, dashed] (3,0)--(3,4) node[pos=0, below] {$\frac12$};

    \draw[thick, dashed] (0,4)--(3,4) node[pos=0, left] {$\frac23$};

\end{tikzpicture}

\end{document}
```

这个新族显然有有限交性质, 不难发现此时能选的点已经被限制到了$(\frac13,\frac13)$, 它必然属于每个$\ms{D}$中元素, 因此也必然属于每个$\ms{A}$中元素.

上面的例子中, 我们仔细选择了符合条件的$\ms{D}$, 然而更一般的条件下该如何选择, 受此启发, 我们不妨每次直接简单地选择"尽可能大的"$\ms{D}$, **以至于没有比他更大的集合满足有限交性质**. 这个族的存在性并非
显而易见, 而是需要Zorn引理推出. 但凡我们确定了其存在性, 就已经保证$\ms{D}$足够大了.

##### 补充

事实上, 在Tychonoff定理的讨论中, 关注$\ms{A}$中的元素是否是闭集没有意义: 我们只需要通过闭包来得到具有紧致性的闭集, 我们只需对具有有限交性质的子集族并证明它们闭包的交非空即可.

##### 证明

>[!lemma] 引理1
>设$X$是一个集合, $\ms{A}$是$X$的一个具有有限交性质的子集. 那么存在$X$的一个子集族$\ms{D}$是$\ms{A}$的母族并具有有限交性质, 同时任何以$\ms{D}$为子族的$X$的子集族一定不具有有限交性质.
>
>※对于符合条件的$\ms{D}$, 我们称它关于有限交性质是*极大的.*

>[!proof]
>我们用[[Zorn引理]]来构造合法的$\ms{D}$.
>
>在此之前, 有必要对我们的符号规范进行重述: 我们此处定义的全序集是集合族的集合, 称之为"超族", 为了区别四个等级的对象, 我们采用不同的字体:
>
>- $c$ 代表$X$的一个元素.
>- $C$代表$X$的一个子集.
>- $\ms{C}$代表$X$的一个子集族.
>- $\mathfrak{C}$代表$X$的一个"超族".
>
>由假设, 给定$X$的一个满足有限交性质的子集族$\ms{A}$, 用$\frak{A}$表示$X$中全体满足$\ms{B}\supset\ms{A}$且$\ms{B}$满足有限交性质的子集族$\ms{B}$组成的超族. 用真包含关系定义$\frak{A}$上的严格偏序:
>$$\ms{S_1}\prec\ms{S_2}\iff\ms{S_1}\subsetneq\ms{S_2}$$
>我们要说明$\frak{A}$有极大元$\ms{D}$. 于是, 设$\frak{B}\subset\frak{A}$ (子超集)并且$\frak{B}$在序关系$\prec$下是全序的, 我们要说明$\frak{B}$在$\frak{A}$中有上界, 于是我们构造
>$$\ms{C}=\bigcup_{\ms{B}\in\frak{B}}{\ms{B}}$$
>我们只需证明$\ms{C}\in\frak{A}$, 就证明了$\frak{B}$有上界: $\ms{C}\in\frak{A}$等同是说, $\ms{C}\supset\ms{A}$且$\ms{C}$满足有限交性质. 显然$\frak{B}$中的任意元素都包含$\ms{A}$, 而$\ms{C}$是其所有元素的交, 因此第一个条件显然成立. 为了证明其满足有限交性质, 任取$\enum{C}{n}\in\ms{C}$, 因为$\ms{C}$是$\frak{B}$中元素的并, 所以对每个$i$必有一个$\ms{B}_i\in\frak{B}$使得$C_i\in\ms{B}_i$.
>显然超族$\set{\,\enum{\ms{B}}{n}\,}$包含于$\frak{B}$, 因此他也是由真包含关系决定的全序集, 由于其有限, 所以一定有最大元, 也就是说, 存在一个指标$k$使得$\ms{B}_i\subset\ms{B}_k,i=1,2,\ldots,n$. 从而$\enum{C}{n}$都属于$\ms{B}_k$, 由于$\ms{B}_k$具有有限交性质, $\bigcap_{i=1}^n{C_i}\ne\O$, 从而$\ms{C}$具有有限交性质, 从而$\ms{C}\in\frak{A}$, 这代表了链$\frak{B}$有上界, 由Zorn引理, $\frak{A}$存在极大元$\ms{D}$. 证毕.

>[!lemma] 引理2
>设$X$是集合, $\ms{D}$是$X$的子集族且关于有限交性质是极大的, 则
>1. $\ms{D}$中元素的任意有限交都属于$\ms{D}$.
>2. 若$A$是$X$的子集且与$\ms{D}$中每个元素都相交, 那么$A\in\ms{D}$.

>[!proof]
>设$B$是$\ms{D}$中有限个元素的交, 将$B$加入到$\ms{D}$中组成新的族$\ms{E}$, $\ms{E}=\ms{D}\cup\set{B}$, 我们只需证明$\ms{E}$满足有限交性质, 这样由$\ms{D}$的极大性就能推出$\ms{E}=\ms{D}$, 从而$B\in\ms{D}$.
>
>任取$\ms{E}$中有限个元素, 如果不含$B$显然满足有限交, 若含有$B$, 他们的交形如
>$$\esum{D}{\cap}{m}\cap B$$
>又因为$B$等于$\ms{D}$中有限交, 因此这个交也非空, 证毕.
>
>---
>类似地, 我们给定$\ms{E}=\ms{D}\cup\set{A}$, 它的一个包含$A$的有限交为
>$$\esum{D}{\cap}{m}\cap A$$
>由于$A$与$\ms{D}$的全部元素有交, 从而这个交非空.

>[!theorem] Tychonoff定理 (Tychonoff theorem)
>在[[箱拓扑与积拓扑|积拓扑]]下, 紧致空间的任意积都是紧致的.

>[!proof]
>对于紧致空间族$\set{X_\alpha}_{\alpha\in J}$设
>$$X=\prod_{\alpha\in J}{X_\alpha}$$
>设$\ms{A}$是$X$的一个具有有限交性质的子集族, 我们的目标是证明其交非空, 从而推出紧致性 ([[紧致性|该页面定理6]]).
>由引理1, 选择$X$中关于有限交性质极大的$\ms{D}\supset \ms{A}$.
>对于给定的指标$\alpha\in J$, 令$\pi_\alpha:X\to X_\alpha$是通常的[[投射]], 考虑$X_\alpha$的子集族
>$$\set{\,\pi_\alpha(D)\mid D\in\ms{D}\,}$$
>它具有有限交性质, 这是因为$\ms{D}$具有有限交性质, 由$X_\alpha$的紧致性推出$\bigcap_{D\in\ms{D}}{\clos{\pi_\alpha(D)}}\ne\O$, 于是在其中选择一点$x_\alpha$, 令$\mathbf{x}=(x_\alpha)_{\alpha\in J}$为$X$中一点, 我们要证明对每个$D\in\ms{D}$都有$\mathbf{x}\in\clos{D}$.
>
>首先证明, 如果$\pi_\beta^{-1}(U_\beta)$是包含$\mathbf{x}$的任意子基元, 那么$\pi_\beta^{-1}(U_\beta)$与$\ms{D}$的任意成员都有交, 这是因为$U_\beta$是$x_\beta$在$X_\beta$中的一个邻域, 由定义$x_\beta\in\clos{\pi_\beta(D)}$, $U_\beta$与$\pi_\beta(D)$交于某一点$x_\beta(\mathbf{y})$, 其中$\mathbf{y}\in D$, 即$\mathbf{y}\in\pi_\beta^{-1}(U_\beta)\cap D$.
>
>由引理2结论(2), 可知$\bf{x}$的每个子基都属于$\ms{D}$, 再由引理2结论(1)知每个包含$\bf x$的基元素也属于$\ms{D}$. 因为$\ms{D}$具有有限交性质, 这就意味着每个包含$\bf x$的基元素都与$\ms{D}$的每一个元素相交, 从而对任意$D\in\ms{D}$都有$\mathbf{x}\in\clos{D}$. , 这说明$\bigcap_{D\in\ms{D}}{\clos{D}}$非空, 由于$\ms{D}\supset\ms{A}$于是$\bigcap_{A\in\ms{A}}{\clos{A}}$非空, 证毕.



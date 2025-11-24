#点集拓扑 
##### 前置
- [[紧致性]]
- [[局部紧致]]
- [[紧致化]]
- [[Hausdorff空间]]
- [[完全正则空间]]
- [[Tychonoff定理]]
- [[Urysohn度量化定理]]

>[!lemma] 引理1
>设$X$是一个空间, $h:X\to Z$是$X$到紧致Hausdorff空间$Z$的一个嵌入, 则存在$X$的一个对应的紧致化$Y$, 且满足: 存在一个嵌入$H:Y\to Z$使得$H|_X=h$, 且在等价的意义下这个紧致化是唯一的.
>※该空间$Y$称为**嵌入$h$诱导的**紧致化.

>[!proof]
>令$X_0=h(X)\subset Z$, $Y_0=\clos{X_0}$, 从而$Y_0$是紧致的Hausdorff空间, 且是$X_0$的紧致化.
>
>我们来构造包含$X$的空间$Y$. 使得空间对$(X,Y)$同胚于$(X_0,Y_0)$. 选取与$X$无交的集合$A$, 以及$A$到$Y_0-X_0$的一个双射$k:A\to Y_0-X_0$, 定义$Y=X\cup A$和双射$H:Y\to Y_0$为
>$$\begin{aligned}&H(x)=h(x),\quad x\in X\\&H(a)=k(a),\quad a\in A \end{aligned}$$
>赋予$Y$拓扑,  使得$U$是$Y$的开集当且仅当$H(U)$是$Y_0$的开集, 显然$H$是同胚, 且$X$为$Y$的子空间, 从而$H|_X=h$, 于是我们得到了要求的$Y$到$Z$的一个嵌入.
>
>---
>假设$Y_i$是$X$的紧致化, 嵌入$H_i:Y_i\to Z$是$h$的扩张映射, $i=1,2$. 于是$H_i$将$X$映到$h(X)=X_0$上. 由于$H_i$连续, 因此他将$Y_i$映射到$\clos{X_0}$中. 又因为$H_i(Y_i)$包含着$X_0$并且是闭集<span style="color:rgb(128,128,128)">(因为是紧致空间)</span>, 从而$H_i(Y_i)\supset \clos{X_0}$, 从而$H_i(Y_i)=\clos{X_0}$, 并且$H_2^{-1}\circ H_1$定义了$Y_1$到$Y_2$的一个同胚, 并且在$X$上等于恒等映射.

这个引理说明了我们可以用嵌入的方法来描述紧致化, 因为有些紧致化的元素在原空间$X$中是很难表述的, 嵌入更大的空间后就易于分析.

给定一个空间$X$, 紧致化的方法可以多种多样, 例如以下列举的数种, 它们都是$(0,1)$的紧致化:

>[!ex] 例1
>选取$\R^2$中的单位圆周$S^1$, 设映射$h:(0,1)\to S^1$为
>$$h(t)=(\cos(2\pi t),\sin(2\pi t))$$
>嵌入$h$是$(0,1)$到$\R^2$的嵌入, 如下图所示
>```tikz
\usepackage{pgfplots}
\begin{document}
\begin{tikzpicture}[domain=-1.5:1.5,scale=1]
\draw[very thin,color=gray] (-1.5+0.1,-1.5+0.1) grid (1.5-0.1,1.5-0.1);
\draw[->] (-1.5-0.1,0) -- (1.5+0.1,0) node[right] {};
\draw[->] (0,-1.5-0.1) -- (0,1.5+0.1) node[above] {};
\draw[thick] (0,0) circle (1);
\filldraw[thick,fill=white] (0,-1) circle (2pt);
\end{tikzpicture}
\end{document}
>```
>它诱导的紧致化等价于$X$的单点紧致化.

>[!ex] 例2
>$[0,1]$是$(0,1)$的一个紧致化, 它是由$(0,1)$两端加上两点得到的.

>[!ex] 例3
>考虑$\R^2$中单位矩形$I^2=[0,1]\times[-1,1]$, 设映射$h:(0,1)\to I^2$为
>$$h(x)=(x,\sin(\frac1x))$$
>则$Y_0=\clos{h(X)}$是拓扑学家的正弦曲线, 嵌入$h$诱导的$(0,1)$的紧致化如下图所示:
>```tikz
\usepackage{pgfplots}
\begin{document}
\begin{tikzpicture}[domain=0:1.5,scale=1.5]
\draw[very thin,color=gray] (0,-1) grid (1.5-0.1,1.5-0.1);
\draw[->] (0,-1) -- (1.5+0.1,-1) node[right] {};
\draw[red,thick,domain=0.01:1,samples=200] plot (\x,{sin(deg(1/\x))});
\filldraw[red,thick] (0,-1)--(0.05,-1)--(0.05,1)--(0,1)--cycle;
\draw[->] (0,-1) -- (0,1.5+0.1) node[above] {};
\draw[line width=2pt] (0,-1)--(0,1);
\draw[line width=2pt] (0,0)--(1,0);
\filldraw[line width=2pt] (1,0) circle (1pt);
\end{tikzpicture}
\end{document}
>```
>它是由在$(0,1)$左边加一条垂直线段, 以及在右边增加一点构成的紧致化.

考虑例1中的紧致化, 有界连续函数$f:(0,1)\to\R$可以扩张到这个紧致化上的充分必要条件是极限
$$\lim_{x\to0+}f(x)=\lim_{x\to1-}f(x)$$
存在且相等. 而对于例2中紧致化的条件则是上述的两个极限都存在.
对于例3, 它的范围更加广, 若上面两个极限存在, 那么$f$可以扩张, 然而函数$f(x)=\sin(\frac1x)$也可以扩张到$X$的紧致化上, 尽管$\lim_{x\to 0+}\sin\frac1x$的极限不存在: 令$H$是$Y$到$\R^2$的嵌入, 在子空间上它等于$h$. 从而复合映射
$$Y\stackrel{H}{\longrightarrow}\R\times\R\stackrel{\pi_2}{\longrightarrow}\R$$
就是所要求的$f$的扩张. 若$x\in X$则$\pi_2(H(x))=\pi_2(h(x))=\pi_2(x,\sin\frac1x)=f(x)$. 这个紧致化中有一点非常重要, 为了得到它, 选择一个嵌入
$$h:(0,1)\to\R^2$$
分量函数分别是$x$和$\sin{\frac1x}$. 我们发现$x$和$\sin{\frac{1}{x}}$都能扩张到$X$的紧致化上. 这给我们以启发: 如果在$(0,1)$上定义了连续有界函数构成的族, **可以用它们作为$(0,1)$到$\R^J$ 的一个嵌入(对于某一个$J$), 从而得到一个紧致化, 使得上述族中每一个函数都可以扩张**. 这便是Stone-Čech紧致化的核心思想:

>[!theorem] 定理1
>设$X$是[[完全正则空间]], 则存在$X$的一个紧致化$Y$满足: 对于每一个有界连续函数$f:X\to\R$都可以唯一地扩张为从$Y$到$\R$的连续函数.

>[!proof]
>设$\set{f_\alpha}_{\alpha\in J}$是$X$上所有有界连续实值函数构成的族, $J$是指标集. 对于每一个$\alpha\in J$, 选取
>$$I_\alpha=[\inf{f_\alpha(X)},\sup{f_\alpha(X)}]$$
>定义$h:X\to\prod_{\alpha\in J}{I_\alpha}$为
>$$h(x)=(f_\alpha(x))_{\alpha\in J}$$
>由[[Tychonoff定理]], $\prod{I_\alpha}$是紧致的. 由于$X$完全正则, 函数族$\set{f_\alpha}$分离$X$中的点和闭集, 从而由[[Urysohn度量化定理|此页面-嵌入定理]]得出, $h$是一个嵌入.
>设$Y$是嵌入$h$诱导的紧致化, 则存在一个嵌入$H:Y\to\prod I_\alpha$. 他在$Y$的子空间$X$上的限制等于$h$.
>给定$X$上一个连续有界的实值函数$f$, 显然它可以扩展到$Y$上. 因为函数$f$属于族$\set{f_\alpha}_{\alpha\in J}$, 故存在指标$\beta$, 使得$f_\beta=f$, 设$\pi_\beta:\prod I_\alpha\to I_\beta$为投射, 则连续映射$\pi_\beta\circ H:Y\to I_\beta$就是所求的$f$的扩张, 这是因为若$x\in X$, 则
>$$\pi_\beta(H(x))=\pi_\beta(h(x))=\pi_\beta((f_\alpha(x))_{\alpha\in J})=f_\beta(x)$$

下面的引理和定理说明了这种扩张的唯一性:

>[!lemma] 引理2
>$X$是拓扑空间, 设$A\subset X$, $f:A\to Y$连续, $Y$是一个Hausdorff空间.
>求证: 若$f$能扩充为一个连续函数$g:\clos{A}\to Y$, 则$g$由$f$唯一决定.

>[!proof]
>假设$g,h:\clos{A}\to Y$, 且$g\ne h$. $g,h$皆为$f:A\to Y$的扩展, 即$f=g|_A=h|_A$.
>由于$g\ne h$, 必然存在一点$x\in\clos{A}-A$, 使得$g(x)\ne h(x)$.
>由于$g(x),h(x)\in Y$. 由Hausdorff条件, **存在$g(x),h(x)$的邻域$U,V$无交**.
>由于$g$在$x$连续, $U$是$g(x)$的邻域, 由连续的等价定义, 存在$x$的邻域$W_1$, 使得对任意$z\in W_1\cap\clos{A}$, 有$g(z)\in U$.
>由于$h$在$x$连续, $V$是$h(x)$的邻域, 由连续的等价定义, 存在$x$的邻域$W_2$, 使得对任意$z\in W_2\cap\clos{A}$, 有$h(z)\in V$.
>取$W=W_1\cap W_2$, 两个开集的交仍是开集, 由于$x\in\clos{A}$, 由闭包的性质, $x$的任何邻域与$A$都有非空交集, 于是$W\cap A\ne\O$, 从而可以取一点$a_0\in W\cap A$.
>由$a_0\in W\subset W_1$, $g(a_0)\in U$, 由$a_0\in W\subset W_2$, $h(a_0)\in V$.
>由$a_0\in A$知, $g(a_0)=h(a_0)=f(a_0)$, 再由$g(a_0)=h(a_0)$结合$g(a_0)\in U,h(a_0)\in V$得$g(a_0)\in U\cap V$, 即$U,V$有交, 这与我们由Hausdorff条件得到的无交矛盾. 故$g=h$, 从而$g$唯一.

>[!theorem] 定理1
>设$X$是一个完全正则空间, $Y_1,Y_2$是$X$的两个满足定理1条件的紧致化, 则$Y_1,Y_2$等价.

>[!proof]
>考虑内射$j_2:X\to Y_2$, 显然他是$X$到紧致Hausdorff空间$Y_2$的连续映射. 因为$Y_1$具有扩张性质, 可以设连续映射$f_2:Y_1\to Y_2$是$j_2$的扩张. 同理可以扩张$j_1:X\to Y_1$为$f_1:Y_2\to Y_1$.
>```tikz
\usepackage{tikz-cd}
\begin{document}
\begin{tikzcd}
X \arrow[d, "j_2"'] \arrow[r,draw=none, "\subset" description] & Y_1 \arrow[ld, "f_2"] &  & X \arrow[d, "j_1"'] \arrow[r,draw=none, "\subset" description] & Y_2 \arrow[ld, "f_1"]\\
Y_2&&&Y_1&
\end{tikzcd}
\end{document}
>```
>复合函数$f_1\circ f_2:Y_1\to Y_1$具有以下性质: 对于每个$x\in X$有$f_1(f_2(x))=x$. 因此$f_1\circ f_2$是恒等映射$\id{X}:X\to X$的连续扩张, 单射$Y_1$上的恒等映射$\id{Y_1}$也是$\id{X}$的连续扩张, 由引理, $f_1\circ f_2=\id{Y_1}$. 类似地$f_2\circ f_1=\id{Y_2}$, 从而$f_1\cong f_2$.

从而, 我们可以定义以下特定的紧致化, 它是一个**泛性质**.

>[!definition]  Stone-Čech紧致化
>对于任一完全正则空间$X$, 在紧致化等价的意义下$X$存在唯一的紧致化$Y$满足: 对于每一个有界连续函数$f:X\to\R$都可以唯一地扩张为从$Y$到$\R$的连续函数. 称之为$X$的**Stone-Čech紧致化**(Stone-Čech compactification), 记作$\beta X$.

Stone-Čech紧致化的核心思想就是, 它是$X$"最大"的紧致化. 它显然满足以下性质

>[!proposition] 性质1
>完全正则空间$X$到紧致Hausdorff空间的任一映射$f:X\to C$由唯一的连续映射$g:\beta(X)\to C$是其扩张.

>[!hint] 练习1
>设$Y$是$X$的任一紧致化, $\beta X$是Stone-Čech紧致化, 则存在一个满的连续闭映射$g:\beta X\to Y$使得$g|_X=\id{X}$.

>[!proof]
>取$j:X\to Y$为内射, 由Stone-Čech的泛性质, 从而存在唯一连续映射$f:\beta X\to Y$使得$f|_X=\id{X}$.
>显然$f$是满射, 因为$f(\beta X)$是紧致子集, 且包含$f(X)=X$,  而$X$在$Y$中稠密, 因此$f(\beta X)$是包含稠密集的紧致闭子集, 必为整个$Y$, 从而$f$是满射.
>任取$\beta X$的闭子集$C$, 由于$\beta X$紧致, $C$紧致. Hausdorff空间中的紧致集必为闭集, 从而$f$为闭映射.

上述练习的结论也刻画了$\beta X$就是最大的紧致化: 任何紧致化都是等价于其某个商空间.
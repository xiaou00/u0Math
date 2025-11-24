#点集拓扑 
##### 前置
- [[一致拓扑]]
- [[点态收敛拓扑]]
- [[紧致收敛拓扑]]
- [[Tychonoff定理]]
- [[等度连续]]
$$\newcommand{\F}{\mathbf{F}} \newcommand{\G}{\mathbf{G}} \newcommand{\H}{\mathbf{H}}$$
>[!theorem] Ascoli定理
>设$X$是一个空间, $(Y,d)$是[[度量空间]], 赋予$\csp(X,Y)$紧致收敛拓扑, 设$\mb F\subset \csp(X,Y)$.  则命题:
>
>若$\mb F$关于$d$[[等度连续]], 并且集合
>$$\mb F_a=\set{f(a)\mid f\in\mb F}$$
>对于每一个$a\in X$都有紧致闭包, 则$\mb F$包含于$\csp(X,Y)$的一个紧致子空间中.
>
>成立, 若$X$是局部紧致的Hausdorff空间, 则逆命题也成立.

>[!proof] 前半段证明 Proof.
>赋予$Y^X$积拓扑, 其与点态收敛拓扑一致. 又由$Y$是度量空间, 蕴含$Y^X$是Hausdorff空间. 空间$\csp(X,Y)$有紧致收敛拓扑, 它不是$Y^X$的子空间<span style="color:rgb(128,128,128)">(拓扑不同)</span>, 设$\G$为$\F$在$Y^X$中的闭包.
>
>---
>I. 先证明$\G$是$Y^X$的紧致子空间.
>给定$a\in X$, 令$K_a$表示$\F_a$在$Y$中的闭包, 由条件直接得出$K_a$是$Y$的紧致子空间, 且集合$\F$包含于积空间
>$$\prod_{a\in X}{K_a}$$
>中. 这个空间是由全体满足: 对任意$a$有$f(a)\in K_a$的函数$f:X\to Y$构成. 由Tychonoff定理, 这个积空间是紧致的. 它是$Y^X$的闭子空间, 因为$\G$是$\F$在$Y^X$中的闭包, 从而$\G$包含于$\prod{C_a}$并且是闭集. 从而$\G$紧致.
>
>---
>II. 证明$\G$中的每个函数都连续, 并且$\G$关于$d$等度连续.
>给定$x_0\in X$和$\epsilon>0$, 选取$x_0$的一个邻域$U$, 使得
>$$d(f(x),f(x_0))<\epsilon /3,\quad\forall f\in\F,x\in U\tag{*}$$
>下面证明对所有$g\in\G$和$x\in U$有$d(g(x),g(x_0))<\epsilon$, 从而$\G$等度连续.
>设$g\in\G$, $x$是$U$的一点, 定义$V_x$是$Y^X$中全体元素$h$构成的开集, 其中$h$满足:
>$$d(h(x),g(x))<\epsilon /3\,\text{且}\, d(h(x_0),g(x_0))<\epsilon/3\tag{**}$$
>因为$g$属于$\F$的闭包 ($\G$), 从而$g$的邻域$V_x$必然包含$\F$的一个元素$f$, 对(\*),和(\*\*)作用三角不等式, 可见$d(g(x),g(x_0))<\epsilon$.
>
>---
>III. 证明$Y^X$上的积拓扑和$\csp(X,Y)$上的紧致收敛拓扑在子集$\G$上一致.
>一般地, 紧致收敛拓扑细于积拓扑, 我们只需证明在子集$\G$上反包含关系成立. 令$g$为$\G$的一个元素, 令$\mc B_C(g,\epsilon)$是$Y^X$上紧致收敛拓扑的包含$g$的一个基元素, 要找到$Y^X$上点态收敛拓扑的一个包含$g$的基元素$B$使得
>$$B\cap \G\subset\mc B_C(g,\epsilon)\cap\G$$
>由$\G$的等度连续性和$C$的紧致性, 选择$X$的有限个开集$\enum{U}{n}$覆盖$C$, 并且额外要求$\enum{U}{n}$分别包含点$\enum{x}{n}$, 并且对于每一个$i$有
>$$d(g(x),g(x_i))<\epsilon /3$$
>其中$x\in U_i$, $g\in\G$. 定义$Y^X$的基元素$B$为
>$$B=\set{h\mid h\in Y^X\,\text{且}\,d(h(x_i),g(x_i))<\epsilon /3,i=1,2,\ldots,n}$$
>下面证明若$h\in B\cap\G$, 则$h$属于$\mc B_C(g,\epsilon)$, 即证明, 对于$x\in C$有$d(h(x),g(x))<\epsilon$. 给定$x\in C$, 选取$i$使得$x\in U_i$. 由于$x\in U_i$且$g,h\in \G$. 从而有
>$$d(h(x),h(x_i))<\epsilon /3\,\text{且}\,d(g(x),g(x_i))<\epsilon /3$$
>又由于$h\in B$, 所以
>$$d(h(x_i),g(x_i))<\epsilon/3$$
>由三角不等式就证明了$d(h(x),g(x))<\epsilon$.
>
>---
>IV. 完成证明.
>集合$\G$包含$\F$并且包含于$\csp(X,Y)$, 并且它是$Y^X$关于积拓扑的紧致子空间(I), 由(III)的结论, 它也是$\csp(X,Y)$关于紧致收敛拓扑的一个紧致子空间.

>[!proof] 后半段证明 Proof.
>设$\H$是$\csp(X,Y)$中包含$\F$的紧致子空间, 下面证明$\H$等度连续, 并且对于每个$a\in X$, $\H_a$紧致. 由此可以推出$\F$等度连续 ($\F\subset \H$), 以及$\clos{\F_a}$紧致 ($\F_a\subset \H_a$).
>
>---
>为了证明$\H_a$紧致, 对于$\H_a$, 考虑以下映射的复合:$$\begin{aligned}
j:\csp(X,Y)&\to X\times\csp(X,Y)\\
f&\mapsto (a,f)
\end{aligned}$$
>以及赋值映射:$$\begin{aligned}
\mathbb{e}:X\times\csp(X,Y)&\to Y\\
(x,f)&\mapsto f(x)
\end{aligned}$$
>显然$f$连续, 由[[紧致开拓扑|此页面的定理1和2]]得出$\mathbb e$也是连续的. 复合映射$\mathbb e\circ j$将$\H$映到$\H_a$中, 由于$\H$紧致, $\H_a$也紧致.
>
>---
>下面我们来证明$\H$在$a$点关于$d$等度连续, 设$A$是$X$的一个紧致子空间, 包含$a$的一个邻域, 只需证明$\csp(A,Y)$的子集
>$$\mb R=\set{f|_A:f\in\H}$$
>在点$a$等度连续即可.
>赋予$\csp(A,Y)$紧致收敛拓扑. 下面证明限制映射
>$$r:\csp(X,Y)\to\csp(A,Y)$$
>是连续的. 设$f$是$\csp(X,Y)$中的一个元素, $B=\mc B_C(f|_A,\epsilon)$是$\csp(X,Y)$中包含$f|_A$的一个基元素, 其中$C$是$A$的一个紧致子空间, 那么$C$是$X$的紧致子空间, 并且$r$将$\csp(X,Y)$中的邻域$\mc B_C(f,\epsilon)$映射到$B$中.
>连续映射$r$将$\H$映到$\mb R$上, 因为$\H$紧致, 故$\mb R$紧致. $\mb R$是$\csp(A,Y)$的一个子空间, 因为$A$紧致, 紧致收敛拓扑和一致拓扑在$\csp(A,Y)$上一致. 由[[完全有界|此页面定理1]]得$\mb R$关于$\csp(A,Y)$的一致度量完全有界. 由[[等度连续|此页面引理1]]得, $\mb R$相对度量$d$等度连续.


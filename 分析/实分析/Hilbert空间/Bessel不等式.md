#分析 

>[!theorem] Bessel不等式
>设$\mc H$是[[可分集|可分]]的[[Hilbert空间]], 对任意$x\in\mc H$和任意[[规范正交]]的一组向量$\set{e_k}$, 有Bessel不等式:
>$$\sum_{k=1}^\infty{|\langle x,e_k\rangle|^2}\le\norm{x}^2$$

>[!proof]
>首先我们考虑一个有限项的求和. 设$n$为任意正整数, 构造向量$y$为$x$在$\set{e_1,e_2,\ldots,e_n}$张成的子空间上的投影:
>$$y=\sum_{k=1}^n{\langle x,e_k\rangle e_k}$$
>下一步, 我们证明残差向量[[正交]]于基向量. 构造$z=x-y$:
>$$z=x-\sum_{k=1}^n{\langle x,e_k\rangle e_k}$$
>我们证明残差$z$与所有的$e_j$, $(1\le j\le n)$是正交的. 不妨利用内积的线性性和规范正交性, $$\begin{aligned}
\langle z,e_j\rangle=&\left\langle x-\sum_{k=1}^n{\langle x,e_k\rangle e_k},e_j\right\rangle\\
=&\langle x,e_j\rangle-\left\langle\sum_{k=1}^n{\langle x,e_k\rangle e_k},e_j\right\rangle\\
=&\langle x,e_j\rangle-\sum_{k=1}^n{\langle x,e_k\rangle\langle e_k,e_j\rangle}
\end{aligned}$$
>由于$\set{e_k}$规范正交, $\langle e_k,e_j\rangle$只在$k=j$时为1, 其余时候为0. 因此求和项中只剩下$k=j$那一项:
>$$\langle z,e_j\rangle=\langle x,e_j\rangle-\langle x,e_j\rangle\cdot 1=0$$
>这就证明了$z$与$y$正交, 即$\langle x-y,y\rangle=0$. 应用[[Pythagoras定理]], 英文$x=y+z$, 且$\langle y,z\rangle=0$, 根据定理有
>$$\lVert x\rVert^2=\lVert{y+z}\rVert^2=\lVert{y}\rVert^2+\lVert{z}\rVert^2\tag{I}$$
>我们展开$\lVert{y}\rVert^2$这一项:$$\begin{aligned}
\lVert{y}\rVert^2=&\langle y,y\rangle\\
=&\left\langle \sum_{k=1}^n{\langle x,e_k\rangle e_k},\sum_{j=1}^n{\langle x,e_j\rangle e_j}\right\rangle\\
=&\sum_{k=1}^n{\sum_{j=1}^n}{\langle x,e_k\rangle\overline{\langle x,e_j\rangle}\langle e_k,e_j\rangle}
\end{aligned}$$
>由于$\langle e_k,e_j\rangle=\delta_{kj}$, 双重求和中, 只有$k=j$的项非零:
>$$\lVert{y}\rVert^2=\sum_{k=1}^n{\langle x,e_k\rangle\overline{\langle x,e_k\rangle}}=\sum_{k=1}^n{|\langle x,e_k\rangle|^2}$$
>代回(I)有
>$$\lVert{x}\rVert^2=\sum_{k=1}^n{|\langle x,e_k\rangle|}+\lVert{z}\rVert^2$$
>显然范数必须是非负实数, 我们立即得到不等式
>$$\sum_{k=1}^n{|\langle x,e_k\rangle|^2\le\lVert{x}\rVert^2}$$
>最后, 取极限. 由于级数单调有界, 从而单$n\to\infty$时,
>$$\sum_{k=1}^\infty{|\langle x,e_k\rangle|^2}\le\lVert{x}\rVert^2$$
>证毕.


#分析 

>[!theorem] Lusin定理
>若$f(x)$是$E\subset\R^n$上的[[几乎处处]]有限的实/复[[可测映射|可测函数]], 则对任给的$\delta>0$, 存在$E$中的[[闭集]]$F$满足$m(E\setminus F)<\delta$使得$f(x)$是$F$上的[[连续映射|连续函数]].

>[!proof]
>我们假设$f(x)$是实值函数, 这是合理的, 因为使得$f$取无穷的点是一个零测集. 首先考虑$f(x)$为可测[[简单函数]]的情形, 对于
>$$f(x)=\sum_{i=1}^p{c_i\chi_{E_i}(x)},\quad x\in E=\bigcup_{i=1}^p{E_i},\quad E_i\cap E_j=\O(i\ne j)$$
>对于任给的$\delta>0$, 对于每个$E_i$, 可以作$E_i$中的闭集$F_i$使得
>$$m(E_i\setminus F_i)<\frac\delta p,\quad i=1,2,\ldots,p$$
>当$x\in F_i$时$f(x)=c$为常值映射, 从而连续, 而$F_1,F_2,\ldots,F_p$无交, 从而$f(x)$在$F=\bigcup_{i=1}^p{F_i}$上连续, 显然$F$是闭集, 且
>$$m(E\setminus F)=\sum_{i=1}^p{m(E_i\setminus F_i)}<\sum_{i=1}^p{\frac{\delta}{p}}=\delta$$
>接下来考虑$f(x)$为一般实/复可测函数的情形, 不妨作变换
>$$g(x)=\frac{f(x)}{1+|f(x)|}$$
>不妨假定$f(x)$是有界函数, 由[[可测映射|此页面定理7]], 我们可以构造可测简单函数列$(\phi_k)\rightrightarrows f$在$E$上. 现在, 对任意$\delta>0$以及每个$\phi_k$都作$E$中的闭集$F_k$使得
>$$m(E\setminus F_k)<\frac\delta{2^k}$$
>使得$\phi_k$在$F_k$上连续(上半部分结论), 令
>$$F=\bigcap_{k=1}^\infty{F_k}$$
>则$F\subset E$且
>$$m(E\setminus F)\le\sum_{k=1}^\infty{m(E\setminus F_k)}<\delta$$
>因为每个$\phi_k$在$F$上连续, 从而由[[一致连续|一致连续定理]], $f$在$F$上连续.

上述定理是[[Littlewood三原则]]的第一个原则的体现.

>[!corollary] 推论1
>若$f(x)$是$E\in\R^n$上几乎处处有限的可测函数, 则对任给的$\delta>0$, 存在$\R^n$上的一个连续函数$g(x)$使得
>$$m\set{x\in E\mid f(x)\ne g(x)}<\delta$$
>若$E$还是有界集, 则可令$g(x)$为[[紧支函数]].

>[!proof]
>由Lusin定理, 对任给的$\delta>0$, 存在$E$中的闭集$F$, $m(E\setminus F)<\delta$且$f(x)$是$F$上的连续函数, 从而由连续函数的延拓, 存在$\R^n$上连续函数$g(x)$使得
>$$f(x)=g(x),\quad x\in F$$
>显然有$\set{x\in E\mid f(x)\ne g(x)}\subset E\setminus F$, 从而
>$$m\set{x\in E\mid f(x)\ne g(x)}\le m(E\setminus F)<\delta$$
>若$E$有界, 不妨设$E\subset \mc B(\vec 0,k)$, 则作$\R^n$上连续函数$\varphi(x)$, $0\le\varphi(x)\le 1$且满足
>$$\varphi(x)=\begin{cases}
1&x\in F \\
0&x\notin \mc B(\mb 0,k)
\end{cases}$$
>将$g$换成$g\circ \varphi$即得所求紧支函数.





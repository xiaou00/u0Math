#点集拓扑 

下面的定理是[[Urysohn引理]]的直接推论:

>[!theorem] Tietze扩张定理 (Tietze extension theorem)
>设$X$是[[正规空间]], $A$是$X$的闭子集, 则
>1. 任何一个$A$到$\R$的闭区间$[a,b]$的连续映射都可以扩张为从整个空间$X$到$[a,b]$的连续映射.
>2. 任何一个$A$到$\R$的连续映射都可以扩张为从整个空间$X$到$\R$的连续映射.

>[!proof]
>>[!hint] 想法
>>证明的总体思路大概为: 在整个空间$X$上构造连续的函数列$\set{s_n}$使其一致收敛. 并且$s_n$在$A$上的限制随$n$增长趋近于$f$. 从而该极限函数连续, 且在$A$上的限制为$f$.
>
>
>I. 我们先在$X$上构造一个特殊的函数$g$: 使得$g$不太大并且在$A$上可以相当精确地逼近$f$. 准确的说, 我们考虑形如$f:A\to[-r,r]$的情形, 我们断言存在一个连续函数$g:X\to\R$使得
>$$\begin{aligned}|g(x)|\le\frac13r &\quad x\in X\\ |g(a)-f(a)|\le\frac23r&\quad a\in A \end{aligned}$$
>函数$g$的构造则如下: 将区间$[-r,r]$分成三个长度都等于$\frac23r$的区间
>$$I_1=[-r,-\frac13r],\quad I_2=[-\frac13r,\frac13r],\quad I_3=[\frac13r,r]$$
>令$A$的子集$B,C$分别为
>$$B=f^{-1}(I_1),\quad C=f^{-1}(I_3)$$
>因为$f$是连续的, 所以$B,C$是$A$中无交的闭子集, 因此他们是$X$的闭集. 从而根据[[Urysohn引理]], 存在一个连续函数
>$$g:X\to[-\frac13r,\frac13r]$$
>满足条件: $x\in B\implies g(x)=-\frac13r$, $x\in C\implies g(x)=\frac13r$.
>我们来验证其符合条件, 显然$|g(x)|\le\frac13r$, 对任意$a\in A$有三种情况:
>1. $a\in B$, $f(a),g(a)$都在$I_1$中.
>2. $a\in C$, $f(a),g(a)$都在$I_3$中.
>3. $a\notin B\cup C$, $f(a),g(a)$都在$I_2$中.
>
>无论哪种情形都有$|g(a)-f(a)|\le\frac23r$.
>
>---
>II. 下面我们来证明定理中的第一种情况, 不失一般性, 我们将闭区间$[a,b]$换做$[-1,1]$进行讨论.
>
>设$f:X\to[-1,1]$是一个连续映射, 显然取$r=-1$时$f$满足第一步假设中的要求. 从而存在定义在$X$上的连续函数$g_1$使得
>$$\begin{aligned}|g_1(x)|\le\frac13 &\quad x\in X\\ |g_1(a)-f(a)|\le\frac23&\quad a\in A \end{aligned}$$
>※考虑函数$f-g_1$, 他是从$A$到$[-\frac23,\frac23]$的映射, 从而对$r=\frac23$再次运用第一步结论, 定义$g_2$使得
>$$\begin{aligned}|g_2(x)|\le\frac13\cdot\frac23=\frac29 &\quad x\in X\\ |f(a)-g_1(a)-g_2(a)|\le\frac23\cdot\frac23=\frac49&\quad a\in A \end{aligned}$$
>以此类推, 一般地, 对于定义在$X$上的实值函数$\enum{g}{n}$, 使得对于$a\in A$有
>$$|f(a)-g_1(a)-\cdots-g_n(a)|\le\left(\frac23\right)^n$$
>可以定义$n+1$的情况
>$$\begin{aligned}|g_{n+1}(x)|\le\frac13\left(\frac23\right)^n &\quad x\in X\\ |f(a)-g_1(a)-\cdots-g_{n+1}(a)|\le\left(\frac23\right)^{n+1}&\quad a\in A \end{aligned}$$
>由归纳定义原理, 我们可以定义每一个$g_n,n\in\Z_+$. 现在我们定义
>$$g(x)=\sum_{n=1}^\infty{g_n(x)}$$
>可以通过与[[几何级数]]
>$$\frac13\sum_{n=1}^\infty\left(\frac23\right)^{n-1}$$
>进行比较, 由比较判别法可知$g(x)$收敛. 令$s_n=\sum_{i=1}^n{g_i(x)}$<span style="color:rgb(128,128,128)">(前n项和)</span>. 由[[Weirstrass M-判别法]]易知函数列$s_n$是一致收敛的, 从而$g$连续([[一致连续|一致连续定理]]).
>
>下面证明$a\in A\implies g(a)=f(a)$, 显然$g(x)$是数列$s_n(x)$的极限, 对于$a\in A$显然有
>$$\left|f(a)-\sum_{i=1}^n{g_i(a)}\right|=|f(a)-s_n(a)|\le\left(\frac23\right)^n$$
>从而对于$a\in A$有$s_n(a)\to f(a)$, 因此$g(a)=f(a)$.
>最后我们证明$g$是$X$到$[-1,1]$的映射, 凑巧的是, 这可以由级数$\frac13\sum_{n=1}^\infty{(\frac23)^n}$的敛散性直接得到.
>
>---
>III. 我们来证明第二条结论. 此时$f:A\to\R$. 可以用$(-1,1)$来代替$\R$, 因为$(-1,1)\cong\R$.
>令$f:A\to (-1,1)$. 上半部分告诉我们$f$可以扩张为$X$到闭区间的连续映射$\phi:X\to[0,1]$使得$\phi(D)=\set{0}$, $\phi(A)=\set{1}$. 定义
>$$h(x)=\phi(x)g(x)$$
>$h$作为两个连续映射的乘积连续, 由于对于$A$中每个点$a$有
>$$h(a)=\phi(a)g(a)=1\cdot g(a)=f(a)$$
>从而$h$也是$f$的扩张. 最后$h$将整个空间$X$映入开区间$(-1,1)$中, 因为若$x\in D$则$h(x)=0\cdot g(x)=0$; 而当$x\notin D$时, $|g(x)|<1$, 由此$|h(x)|\le 1\cdot|g(x)|<1$.


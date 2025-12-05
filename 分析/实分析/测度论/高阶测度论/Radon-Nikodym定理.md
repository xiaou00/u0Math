#分析 

>[!lemma] 引理1
>若$\mu$和$\nu$是全有限测度, $\nu$关于$\mu$[[绝对连续]], 且$\nu$不恒为0, 则存在正数$\epsilon>0$和可测集$A$, 使得$\mu(A)>0$, 并且使得$A$是关于广义测度$\nu-\epsilon\mu$的正集.

>[!proof]
>对于$n=1,2,\ldots$, 设$X=A_n\cup B_n$是关于广义测度$\nu-\frac12\mu$的[[Hahn分解]], 记
>$$A_0=\bigcup_{n=1}^\infty{A_n},\quad B_0=\bigcap_{n=1}^\infty{B_n}$$
>由于$B_0\subset B_n$, 我们有
>$$0\le\nu(B_0)\le\frac1n\mu(B_0),\quad n=1,2,\ldots$$
>所以有$\nu(B_0)=0$, 因此有$\nu(A_0)>0$, 由绝对连续性可知$\mu(A_0)>0$, 从而至少对于$n$的一个值有$\mu(A_n)>0$, 令$A=A_n$, $\epsilon=1 /n$即可.

>[!theorem] Radon-Nikodym定理
>设$(X,\Sigma,\mu)$是[[σ-有限]]的[[测度空间]], 定义在$\Sigma$上的[[σ-有限]]的[[广义测度]]$\nu$关于$\mu$绝对连续, 则在$X$上存在有限值可测函数$f$使得对每一个可测集$E\in\Sigma$都有
>$$\nu(E)=\int_E{f\,\d\mu}$$
>并且若$f,g$都是满足条件的函数, 则$f=g$对于测度$\mu$几乎处处成立.

>[!proof]
>因为$X$可以表示出可数个互不相交的可测集之并, 这些可测集关于$\mu$和$\nu$都是有限的, 不失一般性, 我们可以假设$\mu$和$\nu$都有限的:
>设$\nu$有限且$f$可积, 并且在几乎处处的意义下是唯一的. 由于假设条件$\nu\ll\mu$与$\nu^+\ll\mu$且$\nu^-\ll\mu$等价([[绝对连续|此页面定理1]]), 只需在$\mu,\nu$都有限的条件下证明$f$的存在性即可.
>
>不妨设$\mc K$为全体关于$\mu$可积, 且对于每个可测集$E$都有$\int_E{f\,\d\mu}\le\nu(E)$的非负函数$f$组成的类, 不妨记
>$$\alpha=\sup\set{\int_X{f\,\d\mu}:f\in\mc K}$$
>并设$\set{f_n}$是定义在$\mc K$上的函数列, 使得
>$$\lim_{n\to\infty}{\int_X{f_n\,\d\mu}}=\alpha$$
>若$E$是固定的任意可测集, $n$是固定的任意正整数, 且$g_n=f_1\cup\cdots\cup f_n$. 则$E$可以表示成$n$个互不相交的可测集的并集$E=E_1\cup\cdots\cup E_n$, 使得对于$j=1,2,\ldots,n$, 当$x\in E_j$时有$g_n(x)=f_j(x)$, 所以我们有
>$$\int_E{g_n\,\d\mu}=\sum_{j=1}^n{\int_{E_j}{f_j\,\d\mu}}\le\sum_{j=1}^n{\nu(E_j)}=\nu(E)$$
>若我们记
>$$f_0(x)=\sup\set{f_n(x):n=1,2\ldots}$$
>则$f_0(x)=\lim_{n\to\infty}{g_n(x)}$, 由[[单调收敛定理]], 可知$f_n\in\mc K$且
>$$\int_X{f_0\,\d\mu}=\alpha$$
>由于$f_0$是可积的, 从而存在取有限值的函数$f$使得$f_0=f$对于测度$\mu$几乎处处成立. 下面我们证明若$\nu_0(E)=\nu(E)-\int_E{f\,\d\mu}$, 则测度$\nu_0$恒为0.
>
>若$\nu_0$不恒为0, 由引理可知, 存在正数$\epsilon$和$\nu(A)>0$成立的可测集$A$, 使得对任意可测集$E$都有
>$$\epsilon\mu(E\cap A)\le\nu_0(E\cap A)=\nu(E\cap A)-\int_{E\cap A}{f\,\d \mu}$$
>令$g=f+\epsilon\chi_A$, 则对任意的可测集$E$都有
>$$\int_{E}{g\,\d\mu}=\int_E{f\,\d\mu}+\epsilon\mu(E\cap A)\le\int_{E\setminus A}{f\,\d\mu}+\nu(E\cap A)\le\nu(E)$$
>从而$g\in\mc K$, 然而
>$$\int_{X}{g\,\d\mu}=\int_{X}{f\,\d\mu}+\epsilon\mu(A)>\alpha$$
>与$\alpha$的定义矛盾. 证毕.


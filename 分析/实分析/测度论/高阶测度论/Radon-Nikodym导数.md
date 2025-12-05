#分析 

>[!definition] Radon-Nikodym导数
>设$(X,\Sigma,\mu)$是[[测度空间]], $\mu$是[[σ-有限]]测度, 且[[σ-有限]]的[[广义测度]]$\nu$关于$\mu$[[绝对连续]], 则存在几乎处处意义下唯一的可测函数$f$满足对任意可测集$E$都有
>$$\nu(E)=\int_E{f\,\d\mu}$$
>则称$f$是广义测度$\nu$关于$\mu$的**Radon-Nikodym导数**(Radon-Nikodym derivative), 记作
>$$f=\frac{\d\nu}{\d\mu}\quad\text{或}\quad\d\nu=f\d\mu$$

>[!theorem] 定理1 (可加性)
>设$\nu_1,\nu_2$是σ-有限的广义测度, $(X,\Sigma,\mu)$是测度空间且$\nu_1\ll\mu$, $\nu_2\ll\mu$. 则
>$$\frac{\d(\nu_1+\nu_2)}{\d\mu}=\frac{\d\nu_1}{\d\mu}+\frac{\d\nu_2}{\d\mu}$$

>[!proof]
>显然当$\mu(E)=0$时$(\nu_1+\nu_2)(E)=0+0=0$. 因此$\nu_1+\nu_2\ll\mu$. 并且对任意$E\in\Sigma$有
>$$\nu_1(E)=\int_E{\dd\mu{\nu_1}\,\d\mu}\quad\nu_2(E)=\int_E{\dd\mu{\nu_2}\,\d\mu}$$
>由[[Lebesgue积分]]的线性性质就得到了
>$$(\nu_1+\nu_2)(E)=\int_E{\dd\mu{\nu_1}+\dd\mu{\nu_2}\,\d\mu}$$
>证毕.

>[!theorem] 定理2 (链式法则)
>设$\lambda,\mu$是σ-有限测度且$\mu\ll\lambda$, $\nu$是σ-有限的广义测度, 且$\nu\ll\mu$, 则
>$$\dd\lambda\nu=\dd\mu\nu\dd\lambda\mu$$
>对于测度$\lambda$几乎处处成立.

>[!proof]
>若上述关系式对于$\nu$的上变差和下变差都成立, 那么意味着其对于$\nu$也成立. 于是可以设$\nu$是一个非负测度, 不妨令
>$$f=\dd\mu\nu,\quad g=\dd\lambda\mu$$
>由于$\nu$非负, 显然$f\ge0$对于测度$\mu$几乎处处成立. 不失一般性, 我们设$f$几乎处处非负.
>设$(f_n)$是递增的非负[[简单函数]]列, 它逐点收敛到$f$, 从而由[[单调收敛定理]], 对于每个可测集$E$有
>$$\lim_{n\to\infty}{\int_E{f_n\,\d\mu}}=\int_E{f\,\d\mu}\quad\text{且}\quad\lim_{n\to\infty}{\int_E{f_ng\,\d\lambda}}=\int_E{fg\,\d\lambda}$$
>由于对每一个可测集$F$有
>$$\int_E{\chi_F\,\d\mu}=\mu(E\cap F)=\int_{E\cap F}{g\,\d\lambda}=\int_E{\chi_Fg\,\d\lambda}$$
>于是
>$$\int_E{f_n\,\d\mu}=\int_E{f_ng\,\d\lambda}\quad(n=1,2,\ldots)$$
>因此
>$$\nu(E)=\int_E{f\,\d\mu}=\int_E{fg\,\d\lambda}$$

>[!corollary] 推论1
>设$\lambda,\mu$是[[σ-有限]]的测度, 满足$\mu\ll\lambda$, 若$f$是使得$\int{f\,\d\mu}$有定义的有限值可测函数, 则
>$$\int_X{f\,\d\mu}=\int_X{f\dd\lambda\mu\,\d\lambda}$$

>[!proof]
>对于每一个可测集$E$, 记$\nu(E)=\int_E{f\,\d\mu}$, 由定理2, 对每个可测集有
>$$\nu(E)=\int_E{f\dd\lambda\mu\,\d\lambda}$$
>令$E=X$就证明了定理.

>[!corollary] 推论2
>设$\mu,\lambda$是可测空间$(X,\Sigma)$上σ-有限的测度, 且$\lambda\ll\mu\ll\lambda$, 那么
>$$\dd\mu\lambda\dd\lambda\mu=1$$
>对于$\lambda,\mu$都几乎处处成立.


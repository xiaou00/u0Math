#代数 #群论 #组合数学

>[!lemma] Burnside引理
>设[[群|有限群]]$G$在$\Omega$上有一个[[群作用]], 则有如下等式
>$$|\Omega/G|=\frac{1}{|G|}\sum_{g\in G}{|\fix g\Omega|}$$
>恒成立

>[!proof]
>设$\set{x_1,\ldots,x_n}$, $n=|\Omega/G|$是$\Omega$的$G$-[[轨道]]的完全代表系. 由[[内自同构群|此页面定理3]], 每一条轨道上元素的[[稳定子]]群阶数都相同, 故$\orb{x_i}G$中的元素的稳定子群大小都为$\stab{x_i}G$. 因此
>$$\begin{aligned}
\sum_{x\in \Omega}{|\stab xG|}&=\sum_{i=1}^n{\sum_{x\in\orb{x_i}G}{|\stab{x_i}G|}}\\
&=\sum_{i=1}^n{|\orb{x_i}G|\cdot|\stab{x_i}G|}
\end{aligned}\tag{1}$$
>由[[轨道-稳定子定理]], 
>$$\sum_{i=1}^n{|\orb{x_i}G|\cdot|\stab{x_i}G|}=\sum_{i=1}^n{|G|}=n\cdot|G|=|\Omega/G|\cdot|G|\tag{2}$$
>由[[不动点组合公式]],
>$$\sum_{x\in \Omega}{|\stab xG|}=\sum_{g\in G}{|\fix g\Omega|}\tag{3}$$
>联立(1),(2),(3)就证明了引理.


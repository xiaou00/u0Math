#分析 

>[!def] Banach代数
>若[[赋范代数]] $\mc L$ 是[[Banach空间]], 则称之为一个**Banach代数**(Banach algebra).

若Banach代数的元素 $\mb M$ 在 $\mc L$ 中有乘法逆元 $\mb M^{-1}$. (环的可逆元). 则称 $\mb M$ 是**可逆的**.

>[!thm] 定理1
>假设Banach代数 $\mc L$ 中的元素 $\mb K$ 是可逆的, 则 $\mc L$ 中和 $\mb K$ 充分靠近的元素是可逆的, 特别地, 若
>$$\norm{\mb A}<\frac{1}{\norm{\mb K^{-1}}}$$
>则元素 $\mb L=\mb K-\mb A$ 可逆.

>[!pf]
>我们首先考虑 $\mb K=\mb I$ 的情况, 我们断言, 若
>$$\norm{\mb B}<1$$
>那么 $\mb I-\mb B$ 是可逆的. 并且 $\mb I-\mb B$ 的逆由几何级数
>$$\sum_{n=0}^\infty{\mb B^n}=\mb S\tag{I}$$
>给出. 显然由于 $\norm{\mb B}<1$, 上面级数的部分和序列是Cauchy列. 由于 $\mc L$ 是完备的, 级数收敛. 显然收敛级数可以逐项相乘, 于是我们在上式中左乘 $\mb B$, 可以得到
>$$\mb B\mb S=\mb B\sum_{n=0}^\infty{\mb B^n}=\sum_{n=1}^\infty{\mb B^n}=\mb S-\mb I$$
>由此 $(\mb I-\mb B)\mb S=\mb I$, 类似地在(I)中又乘 $\mb B$ 可证 $\mb S(\mb I-\mb B)=\mb I$, 这就证明了 $\mb S^{-1}=\mb I-\mb B$.
>
>
>下面考虑原命题, 把 $\mb K-\mb A$ 分解为
>$$\mb K-\mb A=\mb K(\mb I-\mb K^{-1}\mb A)\tag{II}$$
>不妨记 $\mb B=\mb K^{-1}\mb A$. 由赋范代数的次乘性, 以及原条件, 
>$$\norm{\mb B}=\norm{\mb K^{-1}\mb A}\le\norm{\mb K^{-1}}\cdot\norm{\mb{A}}<1$$
>利用(I), 我们可以取(II)的逆, 即
>$$(\mb K-\mb A)^{-1}=(\mb I-\mb K^{-1}\mb A)^{-1}\mb K^{-1}=\sum_{n=0}^\infty{(\mb K^{-1}\mb A)^n\mb K^{-1}}$$
>这就证明了 $(\mb K-\mb A)$ 可逆.

>[!cor] 推论1
>上述证明过程中, 我们给出了重要的级数展开: 若 $\mb K-\mb A$ 可逆, 则
>$$(\mb K-\mb A)^{-1}=\sum_{n=0}^\infty{(\mb K^{-1}\mb A)^n}\mb K^{-1}$$


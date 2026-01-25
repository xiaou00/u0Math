#代数 

>[!def] 强解析&弱解析
>设 $f(\zeta)$ 是定义在复平面区域 $G$ 且在复[[Banach空间]] $X$ 中取值的向量值函数.
>弱其在范数意义下处处[[Fréchet微分|F-可微]], 则称其为**强解析**(strong analytic)的, 若对任意 $\ell\in X^*$, $\ell(f(\zeta))$ 在经典意义下是[[解析函数]], 则称 $f(\zeta)$ 在 $G$ 内**弱解析**(weak analytic).
>

>[!thm] Dunford定理 (Dunford Theorem)
>强解析⇔弱解析.

>[!pf]
>强解析显然蕴含弱解析, 只需证明另一种情况. 若 $\ell(f(\zeta))$ 在 $G$ 中解析, 我们可以用[[Cauchy积分公式]]表示.
>$$\ell(f(\zeta))=\int_C{\frac{\ell(f(\chi))}{\chi-\zeta}\frac{\d\chi}{2\pi\i}}$$
>此处 $C$ 是绕 $\zeta$ 的可求长曲线. 当 $\zeta$ 被 $\zeta+k,\zeta+h$ 替换且 $h,k$ 充分小时公式也成立. 假设 $h,k\ne0,h\ne k$. 则
>$$\begin{aligned}
\frac{1}{h-k}\left(\frac{\ell(f(\zeta+h))-\ell(f(\zeta))}{h}-\frac{\ell(f(\zeta+k))-\ell(f(\zeta))}{k}\right)\\
=\int_C{\ell(f(\chi))}{\frac{\d\chi}{2\pi\i(\chi-\zeta-h)(\chi-\zeta-k)(\zeta-\chi)}}
\end{aligned}$$
>从而对固定的 $\ell$, 当 $|k|$ 和 $|h|$ 充分小时, 上式右端以一个与 $h,k$ 无关的常数 $M$ 为界. 从而我们可以把左端改写为 $\ell(x_{h,k})$, 其中
>$$x_{h,k}=\frac{1}{h-k}\left(\frac{f(\zeta+h)-f(\zeta)}{h}-\frac{f(\zeta+k)-f(\zeta)}{k}\right)$$
>弱解析性意味着对每个 $\ell$ 以及充分小的 $h,k$, $|\ell(x_{h,k})|\le M(\ell)$, 由[[共鸣定理]], 存在常数 $c$ 使得对充分小的 $h,k$, $|x_{h,k}|\le c$. 由 $x_{h,k}$ 的定义, 这意味着
>$$\norm{\frac{f(\zeta+h)-f(\zeta)}{h}-\frac{f(\zeta+k)-f(\zeta)}{k}}\le c\norm{h-k}$$
>由于 $X$ 完备, $f(\zeta)$ 的差商 $\dfrac{f(\zeta+h)-f(\zeta)}{h}$ 在强解析意义下收敛.

>[!def] 解析函数
>设 $X$ 是复Banach空间, 对于形如 $\C\to X$ 的函数, 强解析等价于弱解析, 因此可统称为**解析**(analytic).


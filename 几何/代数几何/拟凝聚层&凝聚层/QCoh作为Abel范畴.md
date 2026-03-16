#代数几何 

本页面中, 我们将证明一个定理:

>[!thm] $\mathsf{QCoh}$ 构成Abel范畴
>设 $X$ 是概形, 则[[拟凝聚层]]范畴 $\mathsf{QCoh}(X)$ 构成一个[[Abel范畴]].

首先, 我们容易验证这是一个[[加性范畴]]: 对于 $\mc F,\mc G$ 在 $\mathsf{QCoh}(X)$ 中, 定义 $\mathrm{Hom}(\mc F,\mc G)$ 的加法为逐点加法, 定义零态射为零映射, 定义 $\mc F\oplus\mc G$ 的截影为 $\mc F(U)\oplus\mc G(U)$, 则 $\mathsf{QCoh}(X)$ 是一个加性范畴

假设 $\alpha:\mc F\to\mc G$ 是拟凝聚层的态射, 那么在任何仿射开集上, 设态射由 $\beta:M\to N$ 给出. 我们定义
$$\Gamma(U,\ker\alpha)=\ker\beta,\quad\Gamma(U,\coker\alpha)=\coker\beta$$
则他们在单个元素的局部化下表现良好, 容易验证若
$$0\to K\to M\to N\to P\to 0$$
正合, 则
$$0\to K_f\to M_f\to N_f\to P_f\to 0$$
正合. 于是 $(\ker\beta)_f\simeq\ker(\beta_f)$, $(\coker\beta)_f\simeq\coker(\beta_f)$, 从而二者都定义了拟凝聚层, 检查茎便能验证它们确实是核和余核.

---

我们还有更多结论:

>[!thm] 定理1
>[[概形]] $X$ 上的拟凝聚层 $\mc F\to\mc G\to\mc H$ 正合, 当且仅当其在 $X$ 的任意给定仿射覆盖的每个开集上是正合的. (特别地, 在仿射开集 $\Spec~A$ 上的截面是 $\mathsf{QCoh}_X\to\mathsf{Mod}_A$ 的[[正合函子]]).

>[!pf]
>由于 $\mc F\to\mc G\to\mc H$ 在 $X$ 上正合, 这意味着每个点 $x\in X$ 的茎上也正合. 由于茎是由局部化定义的, 这意味着在每个仿射开集 $\Spec~A$ 上, $\Gamma(\Spec~A,\mc F)\to\Gamma(\Spec~A,\mc G)\to\Gamma(\Spec~A,\mc H)$ 是正合的.

>[!thm] 定理2
>$\mathsf{QCoh}_X$ 中的[[单模|单对象]]是闭点上的[[Skyscraper层]].

>[!pf] Pf. 证明简略
>设 $\mc F$ 是 $\mathsf{QCoh}_X$ 中的单对象, 那么 $\mc F$ 的支持是一个闭子概形 $Z\subset X$. 由于 $\mc F$ 是单对象, 其支持只能是一个闭点 $x\in X$, 否则可以通过限制在 $Z$ 的某个非空开子集上得到 $\mc F$ 的一个非零子对象, 从而与单对象矛盾. 于是 $\mc F$ 的支持是一个闭点 $x\in X$, 由于 $\mc F$ 是单对象, 其茎 $\mc F_x$ 是一个域上的单模, 从而 $\mc F_x\simeq k(x)$, 于是 $\mc F\simeq i_{x*}k(x)$.

>[!thm] 定理3
>若 $\ell(\mc F)<\infty$, 那么 $\mc F$ 是[[几何/代数几何/拟凝聚层&凝聚层/有限型|有限型]]的, 并且 $\mathrm{Supp}(\mc F)$ 为有限个闭点.
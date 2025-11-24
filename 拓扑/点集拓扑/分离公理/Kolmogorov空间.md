#点集拓扑 #分离公理

>[!definition] Kolmogorov空间 (T0)
>空间$X$中, 若任意两个互异的点都是[[分离公理|拓扑可区分]]的, 称空间$X$是一个**Kolmogorov空间**(Kolmogorov space), 或称空间$X$满足**T0公理**(T0 axiom).

作为分离公理中最基本的一个, 他也有很多等价的表述.

>[!theorem] T0公理的等价命题
>下列命题等价:
>1. $X$满足T0公理.
>2. $\forall x,y\in X, x\ne y\implies \ms{N}(x)\ne\ms{N}(y)$
>3. $\forall x,y\in X, x\ne y\implies\clos{\set{x}}\ne\clos{\set{y}}$.

>[!proof] 
>假设对于$x,y\in X$可以选择$x$的邻域$U$使得$y\notin U$, 那么$X-U$就是包含$y$的闭集, $X-U$不包含$x$, $\clos{\set{y}}$是包含$y$的所有闭集的交, 因此$\clos{\set{y}}$不包含$x$, 从而$\clos{\set{x}}\ne\clos{\set{y}}$. 反之, 若$\clos{\set{x}}\ne\clos{\set{y}}$, 取$X-\clos{\set{x}}$是包含$y$却不包含$x$的开集.
>第二个结论显然等价.


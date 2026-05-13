#分析 

>[!thm] Hardy-Littlewood-Pólya定理 (HLP)
>设 $f,g$ 分别是定义在有限[[测度空间]] $(X,\mc M,\mu),(Y,\mc N,\nu)$ 上的非负 $\mc L^1$ 函数且两个测度空间总测度相等. 定义
>$$f^*(s)=\inf\set{t>0\mid\lambda_f(t)\le s}$$
>其中 $\lambda_f(t)=\mu(\set{x\in X:|f(x)|>t})$. 若满足以下两个条件, 则称 $f$ 优超于 $g$:
>1. **局部优** 对任意 $t\in[0,\mu(X)]$, 都有$$\int_0^t{f^*(x)\,\d x}\ge\int_0^t{g^*(x)\,\d x}$$
>2. **总量等** $$\int_0^{\mu(X)}{f^*(x)\,\d x}=\int_0^{\mu(X)}{g^*(x)\,\d x}$$
>
>记作 $f\succ g$. 那么 $f\succ g$ 当且仅当对任意连续[[凸函数]] $\Phi$,
>$$\int_X{\Phi(f)\,\d\mu}\ge\int_Y{\phi(g)\,\d\nu}$$




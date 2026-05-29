#代数几何 

Chevalley是消去理论的一个核心技术性定理, 其核心价值是证明[[可构造性]]在概形的态射下某种意义上是稳定的. 我们给出一个稍弱但够用的形式和一般形式, 不过我懒得写第二种的证明惹.

>[!thm] Chevalley定理 (Chevalley's Theorem)
>设 $f:X\to Y$ 是[[有限型态射]], $X,Y$ 是[[Noether概形]], 则任何 $X$ 的可构造集在其像下亦是 $Y$ 的可构造集.

>[!pf] 证明概要
>我们可以用四次规约
>1. 将原命题规约到证明 $Y$ 仿射的情况, 不妨设 $Y=\Spec B$.
>2. 将1. 归约到 $X$ 仿射的情况, 不妨设 $X=\Spec B[t_1,\ldots,t_n]/I$.
>3. 将2. 归约到 $X=\mathbb A^n_B$ 的情况.
>4. 将3. 归约到 $X=\mathbb A^1_B$ 的情况.
>
>只需证明 $\mathbb A^1_B\to\Spec B$ 的有限型态射满足定理即可.

>[!thm] Chevalley定理 (Chevalley's Theorem)
>设 $f:X\to Y$ 是概形的态射, 设 $f$ 是[[拟紧态射]]且[[有限表示]], 则任何 $X$ 的可构造集在其像下亦是 $Y$ 的可构造集.

这个版本证明参见[Stacks Project页面](https://stacks.math.columbia.edu/tag/054K).


#代数 

>[!def] Noether空间
>设 $X$ 是一个[[拓扑空间]], 如果 $X$ 关于闭子集满足降链条件, 即若
>$$X_1\supset X_2\supset\cdots$$
>是 $X$ 的一个闭子集链, 则存在 $n\ge 1$ 使得 $X_n=X_{n+1}=\cdots$, 则称 $X$ 为一个**Noether空间**(Noether space).

>[!thm] 定理1
>设 $\F$ 是一个域, 则关于[[Zariski拓扑]], $\mathbb A_\F^n$ 是一个Noether空间.

>[!pf]
>设 $V_1\supset V_2\supset\cdots$ 是 $\mathbb A_\F^n$ 中的代数集的降链, 则有 $\F[x_1,\ldots,x_n]$ 中的理想生链
>$$I(V_1)\subset I(V_2)\subset\cdots$$
>由[[Hilbert基定理]], $\F[x_1,\ldots,x_n]$ 是[[Noether模|Noether环]], 从而存在 $r\ge 1$ 使得 $I(V_r)=I(V_{r+1})=\cdots$, 但 $V_i=V(I(V_i))$, 从而 $V_r=V_{r+1}=\cdots$. 证毕.

>[!thm] 定理2
>设 $X$ 是一个Noether空间, $Y$ 是 $X$ 的一个非空闭集, 则 $Y$ 可分解为
>$$Y=Y_1\cup\cdots\cup Y_r$$
>其中 $Y_i$ 是 $X$ 的[[可约空间|不可约]]子集. 称上述分解为 $X$ 的**不可约分解式**. 并且若要求对任意 $i\ne j$ 都有 $Y_i\not\supset Y_j$, 则分解式中的 $Y_i$ 唯一确定, 称之为**约化的不可约分解式**, 称 $Y_i$ 是 $Y$ 的**不可约分支**.

>[!pf]
>首先证明 $Y$ 的不可约分解式的存在性, 如果 $Y$ 是不可约的, 则 $Y=Y$ 就是 $Y$ 的不可约分解式. 若不然, 则有 $Y=Y_1\cup Y_2$, 其中 $Y_1,Y_2$ 都是 $Y$ 的真闭子集. 若 $Y_1,Y_2$ 不全可约, 则将不可约的那个继续替换成真子集的并, 即 $Y=Y_1\cup Y_2\cup Y_3$, 我们断言这个过程只能进行有限步. 若能无限地进行下去, 则存在 $X$ 的闭子集无限降链
>$$Y\supsetneq Y_{11}\supsetneq Y_{21}\supsetneq\cdots$$
>这与 $X$ 的Noether性相悖, 从而上述过程会在有限步终止,从而有
>$$Y=Y_{k1}\cup Y_{k2}\cup\cdots\cup Y_{kr}$$
>其中 $Y_{ki}$ 都是不可约的, 这就是一个不可约分解式. 对其约化便得出一个约化的不可约分解式.
>
>下面证明约化不可约分解式的唯一性, 假设
>$$Y=Y_1\cup\cdots\cup Y_r$$
>和
>$$Y=Y'_1\cup\cdots\cup Y'_s$$
>是 $Y$ 的两个约化的不可约分解式. 则
>$$Y_1=Y_1\cap Y=(Y_1\cap Y'_1)\cup\cdots\cup(Y_1\cap Y'_s)$$
>由于 $Y_1$ 不可约, 从而存在某个 $i_1$ 使得 $Y_1=Y_1\cap Y'_{i_1}$, 故 $Y_1\subset Y'_{i_1}$, 类似地对 $Y'_{i_1}$ 存在某个 $j_1$ 使得 $Y'_{i_1}\subset Y_{j_1}$, 从而 $Y_1\subset Y_{j_1}$, 由于 $Y=Y_1\cup\cdots\cup Y_r$ 是 $Y$ 的约化的不可约分解式, 必然有 $j_1=1$, 于是 $Y_1=Y'_{i_1}$, 类似地可以讨论 $i_2$ 的情况, 这就说明每个 $Y_j$ 都对应一个 $Y'_{i_j}$, 反之讨论亦然. 这就证明了唯一性.

>[!cor] 推论1
>每个代数集都可以唯一分解为有限多个互不包含的不可约代数集的并.

>[!thm] 定理3
>设 $V\subset\mathbb A_\F^n$ 是代数集, 则 $V$ 是不可约的充要条件是 $I(V)$ 是[[素理想]].

>[!pf]
>假设 $V$ 是不可约的, 我们来证明 $I(V)$ 是素理想. 设 $f,g\in\F[x_1,\ldots,x_n]$, 设 $fg\in I(V)$, 则有 $V\subset V(fg)=V(f)\cup V(g)$. 于是 $V=(V\cap V(f))\cup(V\cap V(g))$, 然而 $V$ 不可约, 从而 $V=V\cap V(f)$ 或 $V=V\cap V(g)$. 即 $V\subset V(f)$ 或 $V\subset V(g)$. 从而 $f\in I(V)$ 或 $g\in I(V)$. 从而 $I(V)$ 是素理想.
>
>反过来, 假设 $I(V)$ 是素理想, 我们来证明 $V$ 是不可约的. 设 $V=V_1\cup V_2$ 是两个代数集, 则 $I(V)=I(V_1)\cap I(V_2)$, 而 $I(V)$ 是素理想, 所以必然有 $I(V)=I(V_1)$ 或 $I(V)=I(V_2)$. 于是 $V=V(I(V))=V(I(V_1))=V_1$ 或者 $V=V(I(V))=V(I(V_2))=V_2$. 从而不可约.


#集合 

>[!theorem] Cantor-Schröder-Bernstein定理
>对于[[集合]]$A,B$, $|A|\le|B|\land|B|\le|A|\implies|A|=|B|$. 即两个集合互相存在[[映射|单射]]推出集合[[等势]].

 >[!proof] 证明
>令$f:A\to B$是单射, $g:B\to A$是单射. 令$$C_0=A\setminus g(B),\quad C_{n+1}=g(f(C_n)),\forall n\ge0$$并令$$C=\bigcup_{n=0}^\infty{C_n}$$对任意$a\in A$定义映射$$h(a)=\begin{cases}f(a)&a\in C\\ g^{-1}(a)&a\notin C\\ \end{cases}$$如果$a$不在$C$中, 显然$a$不在$C_0$中, 因此$a\in g(B)$. 由于$g$是单射, 其逆映射$g^{-1}(a)$存在. 下面证明$h:A\to B$是所求的双射
>
> ---
>**满射.** 对于任何 $b\in B$, 如果$b\in f(C)$，那么存在 $a \in C$ 使得 $b=f(a)$. 因此由 $h$ 的定义可知 $b=h(a)$. 如果 $b\notin f(C)$, 定义 $a=g(b)$. 由 $C_0$ 的定义, $a \notin C_0$. 由于 $f(C_n)$ 是$f(C)$ 的一个子集, 因而$b$不属于任何一个$f(C_n)$, 所以由集合$C_n$ 的递归定义以及 $g$ 为单射 ($a$ 属于 $g(f(C_n))$且$a$属于$g(B)$无法产生)的事实可知, $a=g(b)$ 不属于 $C_{n+1}=g(f(C_n))$. 因此, $a\notin C$. 那么根据$h$的定义$b=g^{-1}(a)=h(a)$.
> 
> ---
>**单射.** 若 $h(a)=h(b)$，则有以下四种情况:
> 1.  $a \in C \wedge b \in C$;
> 2.  $a \notin C \wedge b \notin C$;
> 3.  $a \in C \wedge b \notin C$;
> 4.  $a \notin C \wedge b \in C$.
> 
> 对于前两种情况, 由 $f$ 与 $g^{-1}$ 是单射可得 $a=b$.
对于第三种情况, 有 $f(a)=g^{-1}(b) \implies g(f(a))=g(g^{-1}(b))\implies g\circ f(a)=b$, 又由于前提是 $a \in C$, 而 $C$ 在 $g\circ f$ 下封闭, 于是 $b \in C$, 但是由前提得 $b \notin C$, 矛盾. 因此第三种情况不可能出现. 同理, 不失一般性, 第四种情况也不可能出现, 这说明 $\im{f|_C} \cap \im{g^{-1}|_{A \setminus C}} = \varnothing$. 综上若 $h(a)=h(b)$, 一定有 $a=b$.


















#代数 

>[!thm] Jordan-Hölder定理
>一个[[模]]若有[[合成列]], 则其合成列长度都相等. 更一般地, 这个结论对于[[Abel范畴]]的对象亦成立.

>[!pf]
>对于有合成列的模 $M$, 用 $\ell(M)$ 表示 $M$ 的合成列的长度的最小者, 那么 $\ell(M)$ 是非负整数.
>
>我们首先证明, 若 $M$ 有合成列, 且 $N$ 是 $M$ 的真子模, 则 $N$ 也有合成列且 $\ell(N)<\ell (M)$. 令 $\ell(M)=n$, 设
>$$M=M_0\supsetneq M_1\supsetneq\cdots\supsetneq M_n=0$$
>是 $M$ 的一个长度为 $n$ 的合成列, 令 $N_i=N\cap M_i,\, i=0,1,\ldots,n$, 则
>$$N=N_0\supset N_1\supset\cdots\supset N_n=0\tag{S}$$
>是 $N$ 的子模链. 由[[第二同构定理]],
>$$N_i/N_{i+1}=(N\cap M_i)/(N\cap M_{i+1})\cong(M_{i+1}+(N\cap M_i))/M_{i+1}\subset M_i/M_{i+1}$$
>而 $M_i/M_{i+1}$ 是单模, 从而 $N_i/N_{i+1}$ 要么为 0, 要么为单模. 因而只需在 (S) 中约去相邻的相同子模即得 $N$ 的合成列, 从而 $\ell(N)\le\ell(M)$. 若 $\ell(N)=\ell(M)$, 则 (S) 就是其合成列, 那么
>$$M_i=M_{i+1}+(N\cap M_i),\quad i=1,2,\ldots,n-1$$
>于是
>$$\begin{aligned}
M=M_0=&M_1+(N\cap M_0)=M_1+N\\
=&M_2+(N\cap M_1)+N=M_2+N\\
\cdots&\\
=&M_n+N=N
\end{aligned}$$
>这与 $N$ 是 $M$ 的真子模相悖, 故 $\ell(N)<\ell(N)$. 不妨设 $M$ 的任意一个合成列
>$$M=M_0\supsetneq M_1\supsetneq\cdots\supsetneq M_r=0$$
>显然有
>$$\ell(M)>\ell(M_1)>\ell(M_2)>\cdots>\ell(M_r)>0$$
>由此可见 $r\le\ell(M)$, 综上所述 $r=\ell(M)$.


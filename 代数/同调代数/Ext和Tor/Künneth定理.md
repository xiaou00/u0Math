#代数 

>[!thm] Künneth定理 (Künneth Theorem)
>设 $C=(C_\bullet,d^C_\bullet)$ 和 $D=(D_\bullet,d^D_\bullet)$ 分别是右, 左 $R$-模构成的复形. 则可由之构造双复形 $C_\bullet\otimes D_\bullet$, 其全复形记为
>$$C\otimes D=\mathrm{tot}_{\oplus}(C_\bullet\otimes D_\bullet)$$
>即 $C\otimes D$ 的第 $n$ 次项为 $\bigoplus_{p+q=n}{C_p\otimes D_q}$. 其 $d_n$ 拉回到 $C_p\otimes D_q$ 上等于 $d^C_p\otimes\mathbb 1+(-1)^p\mathbb 1\otimes d^D_q$. 这给出自明的典范同态
>$$\kappa:\bigoplus_{p+q=n}{H_p(C)\otimes H_q(D)}\to H_n(C\otimes D)$$
>若每个 $C_p$ 与 $\im(d^C_p)$ 都是右 $R$-[[平坦模]], 则有典范的短正合列
>$$0\to\bigoplus_{p+q=n}{H_p(C)\otimes H_q(D)}\xrightarrow{\kappa}H_n(C\otimes D)\to\bigoplus_{p+q=n-1}{\Tor^R_1(H_p(C),H_q(D))}\to0$$

>[!pf]
>对所有 $p\in\Z$ 定义 $C_p$ 的子模 $B_p=\im(d^C_{p+1})$ 和 $Z_p=\ker(d^C_p)$. 按照 $d^Z=d^B=0$ 将其作为链复形 $Z=Z_\bullet$ 和 $B=B_\bullet$. 由此得到链复形的短正合列
>$$0\to Z\to C\xrightarrow{d^C=(d^C_p)_p}B[-1]\to0$$
>对短正合列 $0\to Z_p\to C_p\xrightarrow{d^C_p}B_{p-1}\to 0$ , 由[[平坦模|此页面定理1]]. $Z_p$ 是平坦模, 由[[平坦模|此页面定理2]]得
>$$0\to Z_p\otimes D_q\to C_p\otimes D_q\to B_{p-1}\otimes D_q\to 0$$
>正合, 从而得到链复形的短正合列
>$$0\to Z\otimes D\to C\otimes D\xrightarrow{d^C\otimes\mathbb 1_{D}} B[-1]\otimes D\to 0$$
>由[[同调代数基本定理]], 有长正合列
>$$\begin{aligned}
\cdots\xrightarrow{\p_{n+1}}H_n(Z\otimes D)\to H_n(C\otimes D)\to H_n(B[-1]\otimes D)\\
\xrightarrow{\p_n}H_{n-1}(Z\otimes D)\to\cdots
\end{aligned}\tag{I}$$
>对 (I) 进行化简, 我们要计算 $H_n(Z\otimes D)$ 和 $H_n(B[-1]\otimes D)$. 对于 $Z,B$, 由于 $d^Z=d^B=0$, 有
>$$\begin{aligned}
&H_n(Z\otimes D)=H_n(\mathrm{tot}_\oplus(Z_\bullet\otimes D_\bullet))\\
=&\frac{\ker\left[\bigoplus_{p+q=n}{Z_p\otimes D_q}\xrightarrow{\mathbb 1_Z\otimes d^D}\bigoplus_{p+q=n-1}{Z_p\otimes D_q}\right]}{\im\left[\bigoplus_{p+q=n+1}{Z_p\otimes D_q}\xrightarrow{\mathbb 1_Z\otimes d^D}\bigoplus_{p+q=n}{Z_p\otimes D_q}\right]}\\
=&\bigoplus_{p+q=n}\frac{Z_p\otimes\ker d^D}{Z_p\otimes\im d^D}\simeq\bigoplus_{p+q=n}Z_p\otimes\left(\frac{\ker d^D}{\im d^D}\right)
\simeq\bigoplus_{p+q=n}{Z_p\otimes H_q(D)}
\end{aligned}$$
>上述计算中利用了 $Z_p$ 的平坦性. 类似地, 有
>$$\begin{aligned}
&H_n(B[-1]\otimes D)=H_n(\mathrm{tot}_\oplus(B[-1]_\bullet\otimes D_\bullet))\\
=&\frac{\ker\left[\bigoplus_{p+q=n}{B_{p-1}\otimes D_q}\xrightarrow{\mathbb 1_B\otimes d^D}\bigoplus_{p+q=n-1}{B_{p-1}\otimes D_q}\right]}{\im\left[\bigoplus_{p+q=n+1}{B_{p-1}\otimes D_q}\xrightarrow{\mathbb 1_B\otimes d^D}\bigoplus_{p+q=n}{B_{p-1}\otimes D_q}\right]}\\
=&\bigoplus_{p+q=n}\frac{B_{p-1}\otimes\ker d^D}{B_{p-1}\otimes\im d^D}\simeq\bigoplus_{p+q=n}B_{p-1}\otimes\left(\frac{\ker d^D}{\im d^D}\right)
\simeq\bigoplus_{p+q=n}{B_{p-1}\otimes H_q(D)}
\end{aligned}$$
>代入 (I) 得
>$$\begin{aligned}
\overbrace{\bigoplus_{p+q=n+1}{B_{p-1}\otimes H_q(D)}}^{=\bigoplus_{p+q=n}{B_p\otimes H_q(D)}}\xrightarrow{\p_{n+1}}\bigoplus_{p+q=n}{Z_p\otimes H_q(D)}\to H_n(C\otimes D)\\ \to\overbrace{\bigoplus_{p+q=n}{B_{p-1}\otimes H_q(D)}}^{=\bigoplus_{p+q=n-1}{B_p\otimes H_q(D)}}\xrightarrow{\p_n}\bigoplus_{p+q=n-1}{Z_p\otimes H_q(D)}
\end{aligned}$$
>显然由 $B_p,Z_p$ 定义, $\coker\p_{n+1}$ 等同于
>$$\bigoplus_{p+q=n}{H_p(C)\otimes H_q(D)}$$
>从它到 $H_n(C\otimes D)$ 的单态射等同于 $\kappa$. 由于
>$$0\to B_p\to Z_p\to H_p(C)\to 0$$
>是 $H_p(C)$ 的平坦解消, 
>$$\ker\p_n\simeq\bigoplus_{p+q=n-1}{\Tor^R_1(H_p(C),H_q(D))}$$
>至此, 得出所断言的短正合列.

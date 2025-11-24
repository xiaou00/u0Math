#代数 #群论 

>[!definition] Sylow p-子群
>设[[群]]$G$的阶数为$n=p^lm$, 其中$p$是质数, $l,m$是正整数, 且$\gcd(p,m)=1$. 此时称$G$中的$p^l$阶子群为$G$的**Sylow p-子群**, $G$中所有Sylow p-子群组成的集合记作$\sylp{G}$.

显然, Sylow p-子群就是$p$在$|G|$中最大次数的子群. 即$G$的子群中极大的[[p-群]].

>[!lemma] 引理1
>设$n=p^lm$, 其中$p$是质数, $l,m$是正整数, 且$\gcd(p,m)=1$. 则对任意小于等于$l$的自然数$k$有
>$$p^{l-k}\,\Big|\,\binom{n}{p^k},\quad\quad p^{l-k+1}\,\not\Big|\,\binom{n}{p^k}$$

>[!proof]
>显然有
>$$\binom{n}{p^k}=\frac{n!}{p^k!(n-p^k)!}=\frac{n(n-1)\ldots(n-j)\ldots(n-p^k+1)}{p^k(p^k-1)\ldots(p^k-j)\ldots1}$$
>我们记$v_p(n)$为$p$作为$n$因子的最大次数. 我们猜想$v_p(n-j)=v_p(p^k-j),1\le j\le p^k-1$, 我们来验证:
>不妨设$j=j'p^t$, 其中$\gcd(j',p)=1,0\le t<k$, 则
>$$n-j=p^lm-p^tj'=p^t(p^{l-t}m-j')$$$$p^k-j=p^k-p^tj'=p^t(p^{k-t}-j')$$
>由于$l\ge k>t$且$\gcd(m,p)=1$, $\gcd(j',p)=1$, 因此$(p^{l-t}m-j')$与$(p^{k-t}-j')$均不含有因子$p$, 从而$v_p(n-j)=v_p(p^k-j)=t$, 于是我们可以约去所有$p^t$:
>$$\frac{(n-1)\cdots(n-p^k+1)}{(p^k-1)\cdots1}=\frac ba$$
>其中$\gcd(a,p)=\gcd(b,p)=1$. 从而
>$$\binom{n}{p^k}=\frac n{p^k}\cdot\frac ba=p^{l-k}\frac{mb}a$$
>由于$\binom{n}{p^k}$是整数, 因此$a\mid p^{l-k}mb$, 由于$\gcd(a,p)=1$, 因此$a\mid mb$, 从而$p^{l-k}\mid\binom{n}{p^k}$, 而$\frac{mb}{a}$不含因子$p$, 由此得出原结论.



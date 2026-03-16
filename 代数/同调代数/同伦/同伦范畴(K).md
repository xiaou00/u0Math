#代数 

>[!def] 同伦范畴
>从[[复形范畴]] $\mathsf{Ch}(\mathfrak A)$, 我们可以定义**同伦范畴**(homotopy category) $\mathsf{K}(\mathfrak A)$, 使得
>$$\operatorname{ob}\mathsf{K}(\mathfrak A):=\operatorname{ob}\mathsf{Ch}(\mathfrak A)$$
>并且定义态射集
>$$\Hom_{\mathsf{K}(\mathfrak A)}(X,Y):=H^0(\Hom^\bullet(X,Y),d^\bullet_{\Hom})=\Hom(X,Y)/\im d^{-1}_{\Hom}$$
>态射的复合继承后者的分次复合. (参考[[链同伦|本页面]]).

显然 $\mathsf{K}(\mathfrak A)$ 是[[加性范畴]], 但其却不一定是[[Abel范畴]]. 
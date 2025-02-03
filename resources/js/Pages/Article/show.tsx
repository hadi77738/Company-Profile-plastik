import { Head, Link } from "@inertiajs/react";

import Layout from "@/Layouts/Layout";
import { TitleText, SubtitleText } from "@/Components/typography";
import { bankProps } from "@/types/bank";
import { servicesProps } from "@/types/services";
import { ArticleProps } from "@/types/article";

export default function ArticleShow({
    banks,
    services,
    article,
}: {
    readonly banks: bankProps;
    readonly services: servicesProps[];
    readonly article: ArticleProps;
}) {
    return (
        <Layout banks={banks} services={services}>
            <Head title={article.title} />

            {/* Banner Artikel */}
            <section className="max-w-screen-xl w-full mx-auto relative">
                <img
                    src={article.image ? `${route('landing')}/storage/${article.image}` : "/default-image.jpg"}
                    alt={article.title}
                    className="max-h-[500px] w-full h-full object-cover"
                />
                <div className="h-full absolute inset-0 bg-black opacity-50"></div>
                <div className="container px-4 md:px-6 mx-auto flex flex-col items-center text-center space-y-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <TitleText color="text-white">{article.title}</TitleText>
                    <SubtitleText color="text-white">{article.description}</SubtitleText>
                </div>
            </section>

            {/* Konten Artikel */}
            <section className="max-w-screen-xl w-full mx-auto py-10 md:py-16">
                <div className="container px-4 md:px-6 mx-auto space-y-8">
                    {/* Kategori */}
                    <div className="text-sm text-gray-500">
                        📌 Kategori: <span className="font-semibold text-[#342C89]">{article.category_id}</span>
                    </div>

                    {/* Isi Artikel */}
                    <div className="prose max-w-none text-gray-700">
                        <div dangerouslySetInnerHTML={{ __html: article.content }} />
                    </div>

                    {/* Tanggal Publikasi */}
                    <div className="text-sm text-gray-500 mt-8">
                        🕒 Dipublikasikan pada: {new Date(article.created_at).toLocaleDateString()}
                    </div>

                    {/* Tombol Kembali */}
                    <div className="mt-10">
                        <Link
                            href={route("articles.index")}
                            className="px-4 py-2 bg-[#342C89] text-white rounded-lg hover:bg-[#2b2679] transition"
                        >
                            🔙 Kembali ke Artikel
                        </Link>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

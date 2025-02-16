import { Head, Link } from "@inertiajs/react";

import HeroCarousel from "@/Components/hero-carousel";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import { ArrowRight } from "lucide-react";
import { TitleText, SubtitleText } from "@/Components/typography";

import { carouselProps } from "@/types/carousel";
import { servicesProps } from "@/types/services";
import { teamProps } from "@/types/team";
import { ArticleProps } from "@/types/article";
import { bankProps } from "@/types/bank";

import Layout from "@/Layouts/Layout";
import SiteContact from "@/Components/site-contact";

export default function Landing({
    banks: metaInfo,
    carousels,
    services,
    teams,
    articles,
}: {
    readonly carousels: carouselProps[];
    readonly services: servicesProps[];
    readonly teams: teamProps[];
    readonly articles: ArticleProps[];
    readonly banks: bankProps;
}) {
    function parseStringToArray(
        input: string
    ): { id: number; feature: string }[] {
        try {
            return JSON.parse(input);
        } catch (error) {
            console.error("Failed to parse input string to array:", error);
            return [];
        }
    }

    return (
        <Layout banks={metaInfo} services={services}>
            <Head title="Home" />
            <HeroCarousel loading={false} data={carousels} />

            <section
            className="relative w-full py-16 md:py-36 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${route("landing")}/assets/hmpg1.jpg)`,
            }}
        >
            {/* Overlay (Opsional, untuk membuat teks lebih jelas) */}
            <div className="absolute inset-0 bg-black opacity-30"></div>

            <div className="relative z-10 container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <h2 className="text-3xl font-thin tracking-tighter text-white sm:text-4xl md:text-5xl">
                        Kami hadirkan berbagai produk dan layanan untuk
                        membantu anda.
                    </h2>
                    <p className="mx-auto max-w-[700px] text-gray-300 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                        Di pabrik kami, kami berkomitmen untuk memberikan hasil pemotongan plastik
                        berkualitas tinggi dengan menggunakan teknologi terbaru yang efisien dan
                        ramah lingkungan.
                    </p>
                </div>

                {services.length > 0 ? (
                    <div className="mx-auto grid max-w-5xl gap-6 pt-12 md:grid-cols-3 md:gap-8">
                        {services.map((service) => (
                            <Card
                                key={service.id}
                                className="h-full rounded-none flex flex-col border-2 border-[#342C89]/10 transition-all hover:border-[#342C89]/20 hover:shadow-lg bg-white"
                            >
                                <CardHeader>
                                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#342C89]/10">
                                        <object
                                            data={`${route("landing")}/storage/${service.icon}`}
                                            type="image/svg+xml"
                                            className="h-8 w-8 text-[#342C89]"
                                        >
                                            {service.name}
                                        </object>
                                    </div>
                                    <CardTitle className="text-2xl font-bold text-[#342C89]">
                                        {service.name}
                                    </CardTitle>
                                    <CardDescription className="text-base">
                                        {service.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="grid gap-4 items-start h-full">
                                    <div className="grid gap-3">
                                        {parseStringToArray(
                                            typeof service.content === "string"
                                                ? service.content
                                                : "[]"
                                        ).map((feature) => (
                                            <p
                                                key={feature.id}
                                                className="font-medium"
                                            >
                                                {feature.feature}
                                            </p>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button
                                        className="w-full group bg-[#342C89] text-white hover:bg-[#342C89]/90"
                                        asChild
                                    >
                                        <Link
                                            href={route(
                                                "service.page",
                                                service.slug
                                            )}
                                        >
                                            Pelajari lebih lanjut
                                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                ) : (
                    <div className="flex items-center justify-center w-full h-96">
                        <p className="text-gray-600">No data available</p>
                    </div>
                )}
            </div>
        </section>

            <section className="max-w-screen-xl w-full mx-auto py-10 md:py-16">
                <div className="grid grid-cols-1 gap-14 md:grid-cols-2 container px-4 md:px-6 mx-auto">
                    <div className="flex flex-col space-y-4 items-start justify-start">
                        <h1 className="text-3xl font-thin tracking-tighter text-[#0a0633] sm:text-4xl md:text-5xl">
                            Tentang kami.
                        </h1>
                        <p className="mx-auto max-w-[700px] text-gray-600 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                            Pabrik Pemotongan Plastik kami berfokus pada proses pemotongan
                            plastik berkualitas tinggi dengan berbagai ukuran dan bentuk yang dapat
                            disesuaikan dengan kebutuhan industri. Kami mengutamakan efisiensi,
                            kualitas, dan keberlanjutan dalam setiap tahap produksi.
                        </p>
                        <Button
                            variant="outline"
                            className="group bg-[#342C89] text-white hover:bg-[#342C89]/90 hover:text-white"
                        >
                            Pelajari lebih lanjut
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </div>
                    <div>
                        <div>
                            <img
                                src={`${route('landing')}/assets/bg1.jpg`}
                                alt="about"
                                className="object-cover w-full h-[400px]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-screen-xl w-full mx-auto py-10 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 container px-4 md:px-6 mx-auto">
                    <div className="relative h-[500px]">
                        <img
                            src={`${route('landing')}/assets/assets1.jpg`}
                            alt="aman dan nyaman"
                            className="brightness-50 absolute -z-10 object-cover w-full h-full"
                            loading="lazy"
                        />
                        <div className="z-10 p-9 text-white flex flex-col absolute bottom-0">
                            <h4 className="text-3xl font-thin mb-3">
                                Aman dan Nyaman
                            </h4>
                            <p className="text-lg">
                            Kami menjamin kualitas produk yang aman dan nyaman, dengan
                            standar tinggi untuk setiap proses pemotongan plastik.
                            </p>
                        </div>
                    </div>
                    <div className="space-y-3 flex flex-col py-5 md:py-0 md:p-10 justify-center order-first md:order-last md:bg-blue-300/25">
                        <div>
                            <Badge
                                variant="outline"
                                className="text-sm bg-blue-500/10 border-blue-400 text-blue-700"
                            >
                                Keunggulan kami ✨
                            </Badge>
                        </div>
                        <TitleText>Kenapa harus kita</TitleText>
                        <SubtitleText>
                        Dengan pengalaman bertahun-tahun di industri pemotongan plastik, kami
                            menawarkan proses pemotongan yang cepat, akurat, dan sangat aman untuk
                            kebutuhan bisnis Anda.
                        </SubtitleText>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 container px-4 md:px-6 mx-auto">
                    <div className="relative h-[500px]">
                        <img
                            src={`${route('landing')}/assets/assets2.jpg`}
                            alt="Pickup Service"
                            className="brightness-50 absolute -z-10 object-cover w-full h-full"
                            loading="lazy"
                        />
                        <div className="z-10 p-9 text-white flex flex-col absolute bottom-0">
                            <h4 className="text-3xl font-thin mb-3">
                                Pickup Service
                            </h4>
                            <p className="text-lg">
                            Kami menyediakan layanan pickup untuk pengantaran material plastik
                            dari lokasi Anda, memastikan efisiensi dan kenyamanan.
                            </p>
                        </div>
                    </div>
                    <div className="relative h-[500px]">
                        <img
                            src={`${route('landing')}/assets/assets3.jpg`}
                            alt="aman dan nyaman"
                            className="brightness-50 absolute -z-10 object-cover w-full h-full"
                            loading="lazy"
                        />
                        <div className="z-10 p-9 text-white flex flex-col absolute bottom-0">
                            <h4 className="text-3xl font-thin mb-3">
                                Proses Cepat
                            </h4>
                            <p className="text-lg">
                            Proses pemotongan plastik kami dilakukan dengan cepat tanpa
                            mengurangi kualitas, sehingga mempercepat waktu produksi Anda.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-screen-xl w-full mx-auto py-10 md:py-16">
                <div className="container px-4 md:px-6 mx-auto flex flex-col items-center text-center space-y-4">
                    <TitleText>Tim Kami</TitleText>
                    <SubtitleText>
                        Kami memiliki tim yang profesional dan berpengalaman.
                    </SubtitleText>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full pt-11">
                        {teams.length > 0 ? (
                            teams.map((team) => (
                                <div
                                    className="flex flex-col items-center text-center"
                                    key={team.id}
                                >
                                    <img
                                        src={`${route('landing')}/storage/${team.image}`}
                                        alt="about"
                                        className="object-cover rounded-full aspect-square w-40"
                                    />
                                    <h3 className="mt-4 font-semibold">
                                        {team.name}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        {team.position}
                                    </p>
                                </div>
                            ))
                        ) : (
                            <div className="flex items-center justify-center w-full h-96">
                                <p className="text-gray-600">
                                    No data available
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <SiteContact banks={metaInfo} />

            <section className="max-w-screen-xl w-full mx-auto py-10 md:py-16">
                <div className="container px-4 md:px-6 mx-auto py-10 md:py-20">
                    <div className="flex flex-col mb-10">
                        <TitleText>Artikel</TitleText>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {articles.length > 0 ? (
                            articles.map((article) => (
                                <div key={article.id}>
                                    <img
                                        src={`${route('landing')}/storage/${article.image}`}
                                        alt={article.title}
                                    />
                                    <div>
                                        <h3 className="mt-4 font-semibold">
                                            {article.title}
                                        </h3>
                                        <p
                                            className="text-sm text-muted-foreground"
                                            dangerouslySetInnerHTML={{
                                                __html: article.description,
                                            }}
                                        />

                                        <Button
                                            className="mt-2 p-0"
                                            variant="link"
                                            asChild
                                        >
                                            <Link href={route("article.page")}>
                                                Baca selengkapnya
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="flex items-center justify-center w-full h-96">
                                <p className="text-gray-600">
                                    No data available
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="flex items-center justify-center mt-10">
                        <Link href={route("article.page")}>
                            <Button>Lihat semuanya</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

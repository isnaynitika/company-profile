import { redirect } from "next/navigation";

const url = process.env.NEXT_PUBLIC_API_URL;

export async function getHome() {
  const res = await fetch(
    `${url}/home?populate[0]=hero_section.gambar_hero.media&populate[1]=list_logos.logo_client.media&populate[2]=produk_section&populate[3]=list_solusis.gambar.media&populate[4]=keunggulan_section.mockup_produk.media&populate[5]=keunggulan_section.list_fiturs&populate[6]=bisnis_section&populate[7]=list_bidangs.icon_bisnis.media`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    redirect("/error");
  } else {
    return res.json();
  }
}

export async function getCareer() {
  const res = await fetch(
    `${url}/karir?populate[0]=main_section&populate[1]=carier_section&populate[2]=list_karirs.icon.media`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    redirect("/error");
  } else {
    return res.json();
  }
}

export async function getLogoClient() {
  const res = await fetch(`${url}/list-logos?populate=*`, { cache: "no-store" });
  if (!res.ok) {
    redirect("/error");
  } else {
    return res.json();
  }
}

export async function getContact() {
  const res = await fetch(`${url}/hubungi-kami?populate[0]=list_contacts.profile_picture.media`, {
    cache: "no-store",
  });
  if (!res.ok) {
    redirect("/error");
  } else {
    return res.json();
  }
}
export async function getPortofolio() {
  const res = await fetch(
    `${url}/portofolio?populate[0]=main_section&populate[1]=count_section&populate[2]=portofolio_section&populate[3]=list_portofolios.gambar_utama.media
    `,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    redirect("/error");
  } else {
    return res.json();
  }
}

export async function getDetailPorto(param) {
  const res = await fetch(
    `${url}/list-portofolios/${param}
      `,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    redirect("/error");
  } else {
    return res.json();
  }
}
export async function getCustomDev() {
  const res = await fetch(
    `${url}/layanan-kami?populate[0]=main_section&populate[1]=count_section&populate[2]=service_section&populate[3]=list_services.icon_service.media&populate[4]=list_services.list_service_details&populate[5]=Metode_Pengembangan.icon_metodepengembangan.media`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    redirect("/error");
  } else {
    return res.json();
  }
}

export async function getPrincipal() {
  const res = await fetch(
    `${url}/prinsip-produk?populate[0]=main_section.gambar.media&populate[1]=principal_section.list_principals.icon.media&populate[2]=commercials_section.list_commercials.icon.media&populate[3]=commercials_section.list_commercials.list_commercial_fiturs&populate[6]=list_bidangs.icon_bisnis.media`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    redirect("/error");
  } else {
    return res.json();
  }
}

export async function getDevService() {
  const res = await fetch(
    `${url}/skill-developer?populate[0]=main_section&populate[1]=developer_section.icon_center.media&populate[2]=developer_section.banner_icon.media&populate[3]=skill_section.list_skills.list_skill_details.icon_skill.media`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    redirect("/error");
  } else {
    return res.json();
  }
}

export async function getProduk() {
  const res = await fetch(`${url}/produk?populate=list_produks.gambar_produk.media`, {
    cache: "no-store",
  });
  if (!res.ok) {
    redirect("/error");
  } else {
    return res.json();
  }
}

const { Router } = require("express");
const { Models } = require("../../models");
const { where } = require("sequelize");

const router = Router();

router.put("/data-diri/:id", async (req, res) => {
  const user_id = req.params.id;
  const { ayah_kandung, ibu_kandung, data_diri, hobi, kesehatan, pendidikan, perkembangan, setelah_pendidikan, tempat_tinggal, wali } = req.body;
  console.log(data_diri);

  try {
    await Models.keterangan_ayah_kandung.update(ayah_kandung, { where: { user_id } });
    await Models.keterangan_ibu_kandung.update(ibu_kandung, { where: { user_id } });
    await Models.keterangan_data_diri.update(data_diri, { where: { user_id } });
    await Models.keterangan_hobi_siswa.update(hobi, { where: { user_id } });
    await Models.keterangan_kesehatan.update(kesehatan, { where: { user_id } });
    await Models.keterangan_pendidikan.update(pendidikan, { where: { user_id } });
    await Models.keterangan_perkembangan.update(perkembangan, { where: { user_id } });
    await Models.keterangan_setelah_pendidikan.update(setelah_pendidikan, { where: { user_id } });
    await Models.keterangan_tempat_tinggal.update(tempat_tinggal, { where: { user_id } });
    await Models.keterangan_wali.update(wali, { where: { user_id } });

    return res.json({ message: "Data updated successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "An error occurred while updating the data" });
  }
});

router.get("/dashboard", async (req, res) => {
  const count_siswa = await Models.user.count();
  const count_laki = await Models.keterangan_data_diri.count({
    where: {
      jenis_kelamin: "laki-laki",
    },
  });

  const count_perempuan = await Models.keterangan_data_diri.count({
    where: {
      jenis_kelamin: "perempuan",
    },
  });

  const count_datainputed = await Models.keterangan_data_diri.count();

  res.status(200).json({
    count_datainputed,
    count_laki,
    count_perempuan,
    count_siswa,
  });
});

module.exports = router;

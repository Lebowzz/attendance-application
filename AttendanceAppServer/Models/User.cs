using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.IO;
using System.Security.Cryptography;
using System.Text;

namespace AttendanceAppServer.Models
{
	[Table("user")]
	public class User
	{
		[Column("id")]
		public int Id { get; set; }

		[Required]
		[Column("fname")]
		[StringLength(50)]
		public string fname { get; set; }

		[Required]
		[Column("lname")]
		[StringLength(100)]
		public string lname { get; set; }

		[Required]
		[Column("email")]
		[EmailAddress]
		public string email { get; set; }

		[Required]
		[Column("password")]
		[StringLength(100)]
		private string password { get; set; }

		[Column("isTeacher")]
		public bool isTeacher { get; set; }

		public User() { }

		public User(string fname, string lname, string email, string password, bool isTeacher)
		{
			this.fname = fname;
			this.lname = lname;
			this.email = email;
			this.password = Encrypt(password);
			this.isTeacher = isTeacher;
		}

		private static readonly byte[] Key = Encoding.UTF8.GetBytes("0123456789ABCDEF");
		private static readonly byte[] IV = Encoding.UTF8.GetBytes("ABCDEF0123456789");

		public static string Encrypt(string plainText)
		{
			using (Aes aesAlg = Aes.Create())
			{
				aesAlg.Key = Key;
				aesAlg.IV = IV;

				ICryptoTransform encryptor = aesAlg.CreateEncryptor(aesAlg.Key, aesAlg.IV);

				using (MemoryStream msEncrypt = new MemoryStream())
				{
					using (CryptoStream csEncrypt = new CryptoStream(msEncrypt, encryptor, CryptoStreamMode.Write))
					{
						using (StreamWriter swEncrypt = new StreamWriter(csEncrypt))
						{
							swEncrypt.Write(plainText);
						}
					}
					return Convert.ToBase64String(msEncrypt.ToArray());
				}
			}
		}

		public static string Decrypt(string cipherText)
		{
			byte[] cipherBytes = Convert.FromBase64String(cipherText);

			using (Aes aesAlg = Aes.Create())
			{
				aesAlg.Key = Key;
				aesAlg.IV = IV;

				ICryptoTransform decryptor = aesAlg.CreateDecryptor(aesAlg.Key, aesAlg.IV);

				using (MemoryStream msDecrypt = new MemoryStream(cipherBytes))
				{
					using (CryptoStream csDecrypt = new CryptoStream(msDecrypt, decryptor, CryptoStreamMode.Read))
					{
						using (StreamReader srDecrypt = new StreamReader(csDecrypt))
						{
							return srDecrypt.ReadToEnd();
						}
					}
				}
			}
		}

	}
}
